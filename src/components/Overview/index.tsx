

const Overview = () => {

    return (
        <div data-testid="overview-component" className="w-full h-full flex flex-col justify-start p-10" style={{background: '#eeeeee'}}>
           <div className="flex fle-row justify-start">
             <p>
              Overview
            </p>
           </div>

          <div className="flex flex-row justify-start mt-10">
            <p>
                Total Sum
            </p>
            <p className="ml-20">
                5
            </p>
          </div>
          <div className="flex flex-row justify-start mt-10">
            <p>
                Average
            </p>
            <p className="ml-24">
                5
            </p>
          </div>
          <div className="flex flex-row justify-start mt-10">
            <p>
                Total Item
            </p>
            <p className="ml-20">
                5
            </p>
          </div>
    
        </div>
    )
} 


export default Overview;