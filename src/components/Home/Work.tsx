import Heading from "../Layouts/Heading"

const Work = () => {
    return (
        <section className="hidden md:block py-10 bg-slate-100 border-t border-gray-200">
            <div className="container mx-auto">
                <Heading
                    title="How We Work"
                    desc="There are many variations of passages of lorem ipsum available."
                />
                <div className="grid grid-cols-3 gap-24 my-12">
                    {[...Array(3)].map((i, k) => (
                        <div key={k} className="flex items-center">
                            <span className="number text-5xl text-green-700">
                                0{k+1}.
                            </span>
                            <div className="text ml-5">
                                <h6 className="font-bold text-lg">SHOP FEATURE {k+1}</h6>
                                <p className="text-sm text-gray-700">Massa a erat nam aliquam condi mentu tum in cum proin</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Work
