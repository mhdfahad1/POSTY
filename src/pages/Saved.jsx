import React, { useEffect } from 'react'
import Header from '../components/Header'
import {  useSelector } from 'react-redux'
import './Home.css'

function Saved() {
    
    const select=useSelector(state=>state.SaveReducer)
    console.log(select);

    useEffect(()=>{

    },[select])
  return (
    <>
    <Header/>
    <div className="col-lg-3"></div>
    <div id='seconddiv' className="col-md-5 mt-4 img-fluid">
                  <h1 className='posts'>SAVED</h1>
                  {
                    select?.length > 0 ?
                      select.map((item) => ( 


                         !item.imgurl && !item.videourl ? 

                          <div  className='mt-3'>
                            <p className='bloghead'>{item.head}</p>
                            <p className='blogtext'>{item.description}</p>
                            <p className='text-muted ms-5'></p>
                            <div className='icons'>
                              <div className='d-flex justify-content-between'>
                                <div className='mt-1'>
                                  <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button>
                                </div>
                                <div className='mt-1'>
                                </div>
                              </div>
                            </div>
                          </div> :

                          < div className='mt-3'>
                            <p className='bloghead'>{item.head}</p>

                            {
                              !item.imgurl ?
                                <video controls loop autoPlay className='blogimage' src={item.videourl}></video>

                                :
                                !item.videurl ?
                                  <img className='blogimage img-fluid' src={item.imgurl} alt="no image" />

                                  : ""
                            }
                            < div className='icons' >
                              <div className='d-flex justify-content-between'>
                                <div className='mt-1'>
                                  <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button>
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-4 " style={{ color: '#080808' }}></i></button>
                                </div>
                                <div className='mt-1'>
                                </div>
                              </div>
                            </div>
                            <p className='blogtext'>{item.description}</p>

                          </div>
                       )) 
                : <p className=' fs-4 text-danger  d-flex justify-content-center align-selects-center'>Nothing to display!!</p> 


                } 



                </div >
    <div className="col-lg-4"></div>
        
    </>
  )
}

export default Saved