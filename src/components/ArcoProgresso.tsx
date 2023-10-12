interface IArcoProgresso {
    porcentagem: number;
}

export function ArcoProgresso(props: IArcoProgresso){
  
    
    
    const result = ((2 * 3.1416 * 80) / 2) * (1 - props.porcentagem / 100)

    return(
        <svg width="300" height="75" xmlns="http://www.w3.org/2000/svg">
                
          <circle
            cx="150"
            cy="90"
            r="80"
            fill="none"
            stroke="#1D1D1B"
            stroke-width="12"
            className="rounded-lg"
          />

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