import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button'

function CategoryCorousel() {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "DevOps Engineer",
        "UX/UI Designer",
        "Mobile App Developer",
        "System Administrator",
        "Network Engineer",
        "Quality Assurance Engineer",
        "Cloud Architect"
    ];
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3" >
                                <Button variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>

                        ))
                    }


                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />


            </Carousel>
        </div>

    )
}

export default CategoryCorousel
