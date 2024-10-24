import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'


import { Label } from './ui/label'

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Mumbai", "Pune", "Banglore", "Hydrabad", "Pan India", "Gurugram"]
    },
    {
        filterType: "Tech",
        array: ["Frontend Developer", "Backend Developer", "Data Scientist"]
    }, {
        filterType: "Package",
        array: ["4-6LPA", "10-16LPA", "16-20LPA", "20-40LPA", "40-60LPA"]
    },

]

function FilterCard() {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-2xl text-purple-600'>Filter Jobs</h1>
            <hr className='mt-5' />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} />
                                            <Label>{item}</Label>
                                        </div>
                                    )

                                })


                            }
                        </div>

                    ))
                }

            </RadioGroup>

        </div>

    )
}

export default FilterCard
