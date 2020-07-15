import React from 'react'

export default function Footer(props) {
    return (
        <div class="Footer">

            <div >
                <button id="prev" class="bold" onClick={() => props.prev()}>{`< Previous`}</button>
            </div>

            <div>
                <button className="midButton" >Edit</button>
                <button className="midButton" >Delete</button>
                <button className="midButton" >New</button>                
            </div>

            <div >
                <button id="next" class="bold" onClick={() => props.next()}>{`Next >`}</button>
            </div>

        </div>
    )
}