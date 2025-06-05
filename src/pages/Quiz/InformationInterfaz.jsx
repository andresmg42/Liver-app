import React from "react";
import useQuizStore from "../../stores/useQuizStore";

const InformationInterfaz = () => {
  const { setInfo, chronometer, progress, setTimer } = useQuizStore();

  const handleStart = () => {
    setInfo(false);
    chronometer.setTimerChrono(setTimer);
    chronometer.stopChrono();
    chronometer.setStartTime(Date.now() - progress.timer);
    chronometer.startChrono();
  };

  return (
    <div className="items-center flex flex-col py-4 gap-8 md:w-[70vh] min-h-[30vh] max-h-[80vh] w-[45vh]  mx-auto px-4 relative bg-black/50 rounded-lg z-10">
      <div className="p-4">
        <h1 className="font-bold text-base text-white">Game Instructions</h1>
        <p>
          The game consists of clicking anywhere on the
          sphere, which causes an impulse in the direction of the click—similar
          to hitting a billiard ball. The goal is to hit boxes that represent
          correct or incorrect zones. There are five zones: treatment,
          recommendations, symptoms, cancer, and neither. If you hit the correct
          box, you gain one point; if you hit an incorrect box, you lose one
          point. The question dashboard is located on the left side of the
          screen, where you’ll find an image and words related to the previous
          topics. There is also a timer that tracks how long it takes you to
          complete the quiz. The faster you finish, the more your score
          increases. Some boxes may fall off the platform after they are no
          longer needed—that’s normal. The "neither" box is placed above and
          farther from the platform to increase the difficulty. Good luck!
        </p>
      </div>
      <button
        className="bg-white/50 hover:bg-black px-4 py-2 rounded-full text-white font-bold my-3"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default InformationInterfaz;
