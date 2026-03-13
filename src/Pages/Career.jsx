import React from 'react';

const Career = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-4">Careers at Dragon News</h1>

            <p className="text-gray-700 mb-6">
                At Dragon News, we believe in the power of truthful journalism and
                creative storytelling. We are always looking for passionate,
                talented, and motivated people to join our growing team.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="border rounded-lg p-5 shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Why Join Us?</h2>
                    <p className="text-gray-700">
                        Work with a dynamic newsroom, grow your skills, and help deliver
                        reliable news to readers everywhere. At Dragon News, every voice
                        matters and every story has impact.
                    </p>
                </div>

                <div className="border rounded-lg p-5 shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Our Culture</h2>
                    <p className="text-gray-700">
                        We value teamwork, integrity, innovation, and curiosity. Our
                        workplace encourages collaboration and continuous learning.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Open Positions</h2>

            <div className="space-y-4 mb-10">
                <div className="border rounded-lg p-5 shadow-sm">
                    <h3 className="text-xl font-semibold">News Reporter</h3>
                    <p className="text-gray-700 mt-2">
                        Research, investigate, and write engaging news stories on current
                        events and trending topics.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90">
                        Apply Now
                    </button>
                </div>

                <div className="border rounded-lg p-5 shadow-sm">
                    <h3 className="text-xl font-semibold">Content Editor</h3>
                    <p className="text-gray-700 mt-2">
                        Review articles, improve content quality, and ensure clarity,
                        accuracy, and consistency across all publications.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90">
                        Apply Now
                    </button>
                </div>

                <div className="border rounded-lg p-5 shadow-sm">
                    <h3 className="text-xl font-semibold">Photojournalist</h3>
                    <p className="text-gray-700 mt-2">
                        Capture compelling visuals that support stories and bring news to
                        life for our audience.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90">
                        Apply Now
                    </button>
                </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-3">How to Apply</h2>
                <p className="text-gray-700 mb-2">
                    Send your resume, portfolio, and a short cover letter to:
                </p>
                <p className="font-semibold text-lg">careers@dragonnews.com</p>
            </div>
        </div>
    );
};

export default Career;