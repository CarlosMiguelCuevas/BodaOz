import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiO = ({mobile}) => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height*7}
      numberOfPieces={50}
      colors={["#008080", "#D23232"]}
      drawShape={(ctx) => {
       

        ctx.beginPath();
        for (let i = 0; i < 22; i++) {
          const angle = 0.35 * i;
          const x = (0.2 + 1.5 * angle) * Math.cos(angle);
          const y = (0.2 + 1.5 * angle) * Math.sin(angle);
          let p1x =
            new Path2D(`M321.89,171.42C233,114,141,155.22,56,65.22c-19.8-21-.3,235.5,98.1,332.7C231.89,468.92,352,461,392.5,392S410.78,228.83,321.89,171.42Z M173,253c86,81,175,129,292,147`);
          var m = document
            .createElementNS("http://www.w3.org/2000/svg", "svg")
            .createSVGMatrix();

          const p = new Path2D();
          const t = m.scale( mobile?0.05:0.1);
          p.addPath(p1x, t);
          ctx.fill(p);
        }
        ctx.stroke();
        ctx.closePath();
      }}
    />
  );
};
export default ConfettiO;
