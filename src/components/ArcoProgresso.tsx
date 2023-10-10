interface IArcoProgresso {
    porcentagem: int;
}

export function ArcoProgresso(props: IArcoProgresso){
  
    // const [raio, setRaio] = useState(40)
    // const [cx, setCx] = useState(100)
    // const [cy, setCy] = useState(75)
    
    const result = ((2 * 3.1416 * 80) / 2) * (1 - props.porcentagem / 100)

    return(
        <svg width="300" height="75" xmlns="http://www.w3.org/2000/svg">
                
          {/* <circle
            cx="150"
            cy="80"
            r="70"
            fill="none"
            stroke="blue"
            stroke-width="10"
          /> */}

          <circle
            cx="150"
            cy="90"
            r="80"

            fill="none"
            stroke="green"
            stroke-width="15"
            stroke-dasharray={2 * 3.1416 * 80} 
            stroke-dashoffset={result}

            
          >
            <animate
      attributeName="stroke-dashoffset"
      from={2 * 3.1416 * 80 / 2}
      to="0"
      dur="2s"
    />
          </circle>
          
        </svg>
    )
}