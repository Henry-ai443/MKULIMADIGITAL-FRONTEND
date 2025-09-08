import React from "react";
 const AiRecommendations = () => {
    return(
        <>
                <h4 className="mb-3 fw-bold">AI Recommendations</h4>
                <div className=" p-3 bg-light" style={{
                    maxHeight: '100vh'
                }}>
                    <ul>
                        <li>Plant drought-resistant crops next season due to forcasted dry weath.</li>
                        <li>Increase fertilizer use by 10% to improve yield.</li>
                        <li>Consider crop rotation with legumes to enhance soil health.</li>
                    </ul>
                </div>
        </>
    );
 }

 export default AiRecommendations