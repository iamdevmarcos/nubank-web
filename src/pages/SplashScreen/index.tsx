import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { AnimatePresence, motion } from "framer-motion";

// framer motion variables
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "#820AD1",
  },
};

const SplashScreen = () => {
  const [showStartButton, setShowStartButton] = useState(false);

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Center>
        <motion.svg
          width="147"
          height="80"
          viewBox="0 0 147 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_191)">
            <motion.path
              d="M27.0694 7.63115C31.6651 2.81392 37.7612 0 44.9229 0C58.8748 0 68.125 10.1635 69.8948 25.3892C70.4686 30.3337 70.4633 37.3047 70.4576 45.379C70.4568 46.207 70.4563 47.0467 70.4563 47.897V78.1445H51.2698V55.7725C51.2698 55.7725 51.2307 36.6253 51.1135 33.0468C50.5986 17.4612 41.3508 7.66805 27.0674 7.65753C22.758 12.2001 20.449 17.7543 20.1085 26.2467C20.0617 27.4312 20.0735 31.6298 20.089 37.1632C20.097 40.0303 20.1061 43.2558 20.1085 46.606C20.1227 61.1883 20.1085 78.1478 20.1085 78.1478H0.922073V43.7175C0.922073 42.5378 0.900524 41.348 0.878892 40.1535C0.835374 37.7507 0.791518 35.3295 0.922073 32.932C1.13885 28.9352 1.83182 25.0062 3.70105 21.3563C7.97971 12.9945 16.7467 7.61065 26.093 7.61065C26.4195 7.61065 26.7462 7.6175 27.0694 7.63115Z"
              fill="#820AD1"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1.5, ease: "easeInOut" },
                fill: { duration: 1.5, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="M146.078 47.068C146.208 44.6705 146.165 42.249 146.121 39.8465C146.099 38.652 146.078 37.4623 146.078 36.2825V1.85217H126.892C126.892 1.85217 126.877 18.8117 126.892 33.3938C126.894 36.744 126.903 39.9693 126.911 42.8363C126.926 48.37 126.938 52.5685 126.892 53.753C126.551 62.2458 124.242 67.7998 119.933 72.3425C105.649 72.3318 96.4019 62.5385 95.8868 46.9533C95.7695 43.3748 95.7199 34.4945 95.7199 24.2095V1.83756L76.5477 1.85543V32.103C76.5477 32.9533 76.5469 33.7928 76.5464 34.621C76.5404 42.6953 76.5354 49.666 77.1092 54.6108C78.8752 69.8365 88.1254 80 102.077 80C109.239 80 115.335 77.186 119.931 72.3688C120.254 72.3825 120.581 72.3893 120.907 72.3893C130.253 72.3893 139.02 67.0055 143.299 58.6438C145.168 54.9935 145.861 51.0648 146.078 47.068Z"
              fill="#820AD1"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 3, ease: [1, 0, 0.8, 1] },
              }}
              onAnimationComplete={() => setShowStartButton(true)}
            />
          </g>
          <defs>
            <clipPath id="clip0_2_191">
              <rect width="147" height="80" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>

        <AnimatePresence>
          {showStartButton && (
            <S.Start
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate("/dashboard")}
            >
              Comecar
            </S.Start>
          )}
        </AnimatePresence>
      </S.Center>
    </S.Container>
  );
};

export default SplashScreen;
