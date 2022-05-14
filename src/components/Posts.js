import React from 'react'
import Header from './Header'
import Post from '../postApi'

export const Posts = () => {
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center" }}>Facebook Posts</h1>
            <div class="container">
                <div class="row">

                    {Post.map((data) => (
                        <div class="col">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={data.img} alt="" />
                                <div class="card-body">

                                    <p class="card-text">{data.discruption}</p>

                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )
}
