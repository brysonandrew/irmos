import {
  useRef,
  useState,
} from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import styled from "@emotion/styled";
import { Layout } from "../parts/layout";
import { Results } from "../parts/results";
import { Search } from "../parts/search";
import {
  BODY_OFFSET,
  HEADER_HEIGHT,
  MAX_WIDTH,
  SCROLL_BUFFER,
  Y_MOVE,
} from "../config/constants";

const Top = styled(motion.div)`
  bottom: calc(50% - ${BODY_OFFSET}px);
  max-width: ${MAX_WIDTH}px;
`;

const Bottom = styled(motion.div)`
  top: calc(50% + ${BODY_OFFSET}px);
`;

const Marker = styled(motion.div)`
  position: absolute;
  left: 0;
  height: ${BODY_OFFSET}px;
  top: calc(100% + ${0}px);
`;

export type TEntryRecord = {
  intersect: TIntersect | null;
  shouldSwitch: boolean;
};

type TIntersect = "Leave" | "Enter";
const DIRECTIONS = [
  "dsc",
  "flat",
  "asc",
] as const;
export type TDirection =
  typeof DIRECTIONS[number];

export const Body = () => {
  const markerRef = useRef();
  const [
    { shouldSwitch, intersect },
    setEntryRecord,
  ] = useState<TEntryRecord>({
    intersect: null,
    shouldSwitch: true,
  });
  const y = useMotionValue(0);
  const scale = useTransform(
    y,
    [0, -Y_MOVE],
    [1, 0.7]
  );
  const opacity = useTransform(
    y,
    [0, -Y_MOVE],
    [1, 0]
  );
  const inverseY = useTransform(
    y,
    (v) => Y_MOVE + v
  );
  const inverseScale = useTransform(
    scale,
    [1, 0.7],
    [0.7, 1]
  );
  const inverseOpacity = useTransform(
    opacity,
    (v) => 1 - v
  );
  const isMarkerInView =
    useInView(markerRef);

  const handleEntry = (
    entry: IntersectionObserverEntry,
    intersect: TIntersect
  ) => {
    setEntryRecord(() => {
      const top =
        entry.boundingClientRect.top;
      const halfHeight =
        entry.rootBounds.height * 0.5;
      const shouldSwitch =
        top > halfHeight;

      return {
        intersect,
        shouldSwitch,
      };
    });
  };

  const handleViewportEnter = (
    entry: IntersectionObserverEntry
  ) => {
    handleEntry(entry, "Enter");
  };

  const handleViewportLeave = (
    entry: IntersectionObserverEntry
  ) => {
    handleEntry(entry, "Leave");
  };

  const isResults =
    (isMarkerInView &&
      intersect === "Enter" &&
      shouldSwitch) ||
    (!isMarkerInView &&
      intersect === "Leave" &&
      !shouldSwitch);

  return (
    <Layout isResults={isResults}>
      <MotionConfig
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
      >
        <Top
          className="absolute left-1/2 w-full z-20"
          style={{
            x: "-50%",
            y,
            scale,
            opacity,
          }}
          initial={false}
          animate={{
            y: isResults ? -Y_MOVE : 0,
          }}
        >
          <Search />
        </Top>
        <Bottom
          className="relative left-1/2 w-full z-10 pt-72"
          style={{
            x: "-50%",
            bottom: `calc(50% - ${SCROLL_BUFFER}px)`,
            y: inverseY,
            scale: inverseScale,
            opacity: inverseOpacity,
          }}
          initial={false}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
        >
          <Results />
        </Bottom>
      </MotionConfig>
      <Marker
        onViewportEnter={
          handleViewportEnter
        }
        onViewportLeave={
          handleViewportLeave
        }
        ref={markerRef}
      />
    </Layout>
  );
};
