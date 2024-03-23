const Banner = () => {
    return (
        <div className="mx-20 mt-2 rounded-lg">
            <div className="hero h-[500px] rounded-lg" style={{ backgroundImage: 'url(/bg.jpg' }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-extrabold text-white">I Grow By Helping In Needs</h1>
                    <div className="join">
                        <input className="input input-bordered text-black border-0 join-item" placeholder="Search here.." />
                        <button className="btn join-item bg-orange-500 text-white border-0">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};

export default Banner;