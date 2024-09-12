const apiUrl = import.meta.env.VITE_API_URL;

const jobLoader = async ({params}) => {
    const res = await fetch(`${apiUrl}/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {jobLoader as default} 