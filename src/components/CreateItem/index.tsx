import { useState } from "react";



const CreateItem = () => {
     //State
    const [value, setValue] = useState({
        name: '',
        net: '',
        gross: 0,
    })
    //handler Function
    const handleValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleAddItem  = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("in here")
    }

    return (
        <div data-testid="create-item-component" className="flex flex-col item-center h-full">
            <form className="w-full h-4/6 animate__animated animate__fadeIn" onSubmit={(e) => handleAddItem(e)}>
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-xl font-medium text-gray-900 text-left"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-100 focus:outline focus:outline-2 focus:outline-slate-400 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
                        placeholder="Enter a login to continue"
                        required={true}
                        value={value.name}
                        onChange={(e) => handleValChange(e)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="net"
                        className="block mb-2 text-xl font-medium text-gray-900 text-left"
                    >
                        Net
                    </label>
                    <input
                        type="text"
                        name="net"
                        className="bg-gray-50 border border-gray-100 focus:outline focus:outline-2 focus:outline-slate-400 text-gray-900 text-md rounded-md h-14 block w-full p-2.5"
                        placeholder="Enter a login to continue"
                        required={true}
                        value={value.net}
                        onChange={(e) => handleValChange(e)}
                    />
                </div>
                <div className="flex flex-row jusitfy-end items-center space-x-2 my-4">
                    <div>
                        <p>Tax</p>
                        <p>
                        {
                            new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(16)
                        }    
                        </p>%
                    </div>
                    <div>
                        <p>Gross</p>
                        <p>
                        {
                            new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(value.gross))
                        }
                        </p>%
                    </div>
               </div>
               <div className="flex flex-row jusitfy-end">
                    <button
                    type="submit"
                    className="text-white bg-green-500 focus:ring-4 h-14 font-medium rounded-lg text-lg w-full sm:w-2/6 px-5 py-2.5 text-center"
                    >
                     Reset
                    </button>
                    <button
                    type="submit"
                    className="text-white bg-red-600 focus:ring-4 h-14 font-medium rounded-lg text-lg w-full sm:w-2/6 px-5 py-2.5 text-center"
                    >
                     Add
                    </button>
               </div>
            </form>
        </div>
    )
}

export default CreateItem