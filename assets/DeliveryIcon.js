import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const DeliveryIcon = (props) => (
  <Svg
    width={33}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.442.243c-.06.157-.082 3.526-.05 7.487l.059 7.201h17.795V.075L20.398.016c-6.99-.046-8.87.001-8.956.227Zm6.175 3.937c.072 3.569.202 3.76 1.733 2.533l.888-.711.933.694c1.674 1.246 1.735 1.158 1.735-2.457V1.088h5.339v12.83H12.229V1.088h5.326l.062 3.092Zm4.177-.712v2.38l-.586-.467c-.735-.585-1.071-.585-1.882-.001l-.646.466V1.088h3.114v2.38Zm-8.11 8.503c-.766.566-.177.822 1.895.822 1.8 0 1.989-.04 1.989-.424 0-.25-.207-.48-.5-.56-.91-.246-2.965-.148-3.385.162Zm16.167 5.88c-.582.495-.697.52-1.074.231-.231-.177-.768-.326-1.191-.33-.664-.006-.98.21-2.294 1.57-1.283 1.326-1.59 1.54-1.94 1.35-.23-.124-1.778-.226-3.443-.226-2.697 0-3.128-.054-3.963-.5-1.32-.704-3.66-.707-5.066-.006-.559.279-1.278.506-1.599.506-.495 0-.593-.11-.652-.731l-.07-.732-4.099-.061c-3.13-.047-4.14.006-4.278.225-.208.33-.254 8.962-.052 9.497.117.307.699.356 4.203.356 4.345 0 4.337.002 4.337-1.144 0-.6.982-.57 2.363.074 1.025.477 1.422.51 7.202.584 6.774.087 7.911-.047 9.148-1.08.864-.72 5.177-6.603 5.53-7.542.305-.812-.228-2.076-1.002-2.373-.896-.345-1.351-.272-2.06.331Zm1.958.914c.387.472.194.843-2.106 4.049-2.467 3.438-3.076 4.094-4.085 4.396-.537.16-3.018.221-7.16.174-6.078-.07-6.379-.093-7.276-.579-.516-.278-1.291-.506-1.724-.506H8.67v-4.727h.7c.386 0 1.238-.266 1.894-.59 1.435-.71 3.029-.675 4.497.1.83.437 1.275.49 4.141.49 3.018 0 3.226.028 3.457.465.191.361.168.586-.104 1.007-.339.522-.457.543-3.408.604-2.889.059-3.058.087-3.058.512 0 .428.17.454 3.337.517 1.835.037 3.673.005 4.085-.071.591-.11 1.36-.777 3.644-3.162 1.592-1.663 3.07-3.024 3.283-3.024.214 0 .516.155.671.345Zm-3.482.283c.06.098-.78 1.137-1.867 2.308l-1.975 2.13-.011-.895c-.01-.801.134-1.042 1.373-2.308 1.286-1.313 2.165-1.75 2.48-1.235ZM7.558 23.823v4.052H1.107V19.77H7.558v4.052Z"
      fill="#fff"
    />
  </Svg>
)

export default DeliveryIcon