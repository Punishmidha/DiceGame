import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    transition: transform 0.2s ease-in-out; /* Smooth hover effect */

    &:hover {
      transform: scale(1.1); /* Slight zoom on hover for interactivity */
    }

    &:active {
      animation: rotateDice 0.6s ease-in-out; /* Trigger animation on click */
    }
  }

  @keyframes rotateDice {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(360deg) scale(1.2); /* Rotate and slightly zoom in */
    }
    100% {
      transform: rotate(720deg) scale(1); /* Complete rotation and return to normal size */
    }
  }
`;
