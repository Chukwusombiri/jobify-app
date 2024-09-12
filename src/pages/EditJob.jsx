import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL;

const EditJob = ({ notify }) => {
    const navigate = useNavigate();
    const loadedJob = useLoaderData();
    const [job, setJob] = useState(loadedJob);

    const handleChange = (evt) => {
        const field = evt.target.name;
        const val = evt.target.value;

        const keys = field.split('.');
        setJob(prev => {
            if(keys.length===1){
                return {...prev, [field]:val}
            }else{
                return {
                    ...prev,
                    [keys[0]]:{
                        ...prev[keys[0]],
                        [keys[1]]: val
                    }
                }
            }
        })        
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();        
        const confirm = window.confirm("Are you sure about this?")
        if(! confirm) return ;
        try {
            await fetch(`${apiUrl}/jobs/${job.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': "application/json",                
                },
                body: JSON.stringify(job)
            })
            notify.success("Successful");
            return navigate(`/jobs/${job.id}`);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                            >Job Type</label
                            >
                            <select
                                id="type"
                                name="type"
                                value={job.type}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required                                                                
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Job Listing Name</label
                            >
                            <input
                                type="text"
                                id="title"
                                name="title"
                                 value={job.title}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >Description</label
                            >
                            <textarea
                                id="description"
                                name="description"
                                 value={job.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Add any job duties, expectations, requirements, etc"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Salary</label>
                            <select
                                id="salary"
                                name="salary"
                                 value={job.salary}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                required
                            >
                                <option value="Under $50K">Under $50K</option>
                                <option value="$50K - 60K">$50K - $60K</option>
                                <option value="$60K - 70K">$60K - $70K</option>
                                <option value="$70K - 80K">$70K - $80K</option>
                                <option value="$80K - 90K">$80K - $90K</option>
                                <option value="$90K - 100K">$90K - $100K</option>
                                <option value="$100K - 125K">$100K - $125K</option>
                                <option value="$125K - 150K">$125K - $150K</option>
                                <option value="$150K - 175K">$150K - $175K</option>
                                <option value="$175K - 200K">$175K - $200K</option>
                                <option value="Over $200K">Over $200K</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Location
                            </label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                 value={job.location}
                                onChange={handleChange}
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='Company Location'
                                required
                            />
                        </div>

                        <h3 className="text-2xl mb-5">Company Info</h3>

                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                            >Company Name</label
                            >
                            <input
                                type="text"
                                id="company"
                                name="company.name"
                                 value={job.company.name}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="company_description"
                                className="block text-gray-700 font-bold mb-2"
                            >Company Description</label
                            >
                            <textarea
                                id="company_description"
                                name="company.description"
                                 value={job.company.description}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="What does your company do?"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="contact_email"
                                className="block text-gray-700 font-bold mb-2"
                            >Contact Email</label
                            >
                            <input
                                type="email"
                                id="contact_email"
                                name="company.contactEmail"
                                 value={job.company.contactEmail}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Email address for applicants"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact_phone"
                                className="block text-gray-700 font-bold mb-2"
                            >Contact Phone</label
                            >
                            <input
                                type="tel"
                                id="contact_phone"
                                name="company.contactPhone"
                                 value={job.company.contactPhone}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3"
                                placeholder="Optional phone for applicants"
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditJob