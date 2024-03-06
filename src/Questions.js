function Questions(){
    return (
        <div className="container-fluid py-2 gap-5 d-flex flex-column justify-content-between align-items-center col-12 col-md-8 col-lg-6 col-xxl-4">
            {/* Question */}
            <div className="row g-0 w-100">
                <div className="col-auto pe-2">Q1.</div>
                <div className="col">Lorem ipsum</div>
            </div>
            {/* Answer */}
            <div className="w-100 py-4 flex-grow-1">
                <input type="text" className="w-100 h-100 form-control text-center" placeholder="Enter the answer.." style={{minHeight:"8rem"}} />
            </div>
            {/* Submit Button */}
            <div className="w-100">
                <button className="btn w-100 btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default Questions;