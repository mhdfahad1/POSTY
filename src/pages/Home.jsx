import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import './Home.css'
import Card from 'react-bootstrap/Card';
import { deleteApost, editApost, getApost, profileDetails } from '../services/allAPI';
import { useDispatch } from 'react-redux';
import { addToSave } from '../Redux/SavedSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckBox, Favorite, FavoriteBorder } from '@mui/icons-material';

function Home() {
  const dispatch = useDispatch()
  const [profile, setProfile] = useState("")
  const [change, setChange] = useState(0)
  const [allPost, setallPost] = useState([])
  var d = new Date();
  d.toLocaleString(); // -> "2/1/2013 7:37:08 AM"
  d.toLocaleDateString(); // -> "2/1/2013"
  d.toLocaleTimeString(); // -> "7:38:05 AM"

  const viewPosts = async () => {

    const response = await getApost()
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setallPost(response.data)

    }
    // else {
    //   toast.error('server error')
    // }


  }
  const removeItem = async (id) => {
    console.log(id);
    await deleteApost(id)
    viewPosts()
  }
  const allDatas = () => {
    setChange(0)
  }
  const allPhoto = () => {
    setChange(1)
  }
  const allVidees = () => {
    setChange(2)
  }
  const allTexts = () => {
    setChange(3)
  }

  const profileAdding = async () => {
    const response = await profileDetails()
    console.log(response);
    // if(response.status>=200&&response<300){
    setProfile(response.data)
    // }
    // else{
    //   alert('server error')
    // }
  }


  useEffect(() => {
    viewPosts();
    profileAdding();
  })

  return (
    <>
      <Header />
      <div className='overflow'>
        <div className='row'>
          <div id='firstdiv' className="col-md-3 border ">
            <div className='mt-4'>
              {/* <Link to={'/saved'} className='ms-1 links mt-5'> <button className='btn'> <i className="fa-solid fa-bookmark fs-4 " style={{ color: '#080808' }}></i> </button>
                Saved</Link><br />
              <Link className='ms-1 links mt-5'><button className='btn'><i className="fa-regular fa-heart fa-1x" style={{ color: "#0f0f0f;" }}></i></button>

                Liked</Link><br /> */}
              <Link onClick={() => allDatas()} className='ms-1 links mt-5'><button className='btn'><i className="fa-solid fa-photo-film" style={{ color: "#0d0d0d;" }}></i></button>

                ALL</Link><br />
              <Link onClick={() => allPhoto()} className='ms-1 links mt-5'><button className='btn'><i className="fa-regular fa-image" style={{ color: "#0d0d0d;" }}></i></button>

                POSTS</Link><br />
              <Link onClick={() => allVidees()} className='ms-0 links mt-5'><button className='btn'><i className="fa-solid fa-video ms-1" style={{ color: "#0d0d0d;" }}></i></button>

                VIDEOS</Link><br />
              <Link onClick={() => allTexts()} className='ms-0 links mt-5'><button className='btn'><i className="fa-solid fa-pen ms-1" style={{ color: "#19191a;" }}></i></button>

                TEXTS</Link>
            </div>
          </div>
          {
            change === 0 ?
              (
                <div id='seconddiv' className="col-lg-6 mt-4 img-fluid">
                  <h1 className='posts'>ALL</h1>
                  {
                    allPost?.length > 0 ?
                      allPost?.map((item) => (


                        !item.imgurl && !item.videourl ?

                          <div className='mt-3 textdiv'>
                            <p className='bloghead'>{item.head}</p>
                            <p className='blogtext'>{item.description}</p>
                            <p className='text-muted ms-5'>{d.toLocaleDateString()}</p>
                            <div className='icons'>
                              <div className='d-flex justify-content-between'>
                                <div className='mt-1'>
                                  {/* <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button> */}
                                 
                                    <FormControlLabel 
                                      control={<Checkbox icon={<FavoriteBorder style={{ marginLeft:'10px' }} />}
                                        checkedIcon={<Favorite style={{ color: "red" ,marginLeft:'10px'}} />}
                                        name="checkedH" />}
                                    />
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-5 " style={{ color: '#080808',marginLeft:'-10px' }}></i></button>



                                </div>
                                <div className='mt-1'>
                                  <button onClick={(id) => removeItem(item?.id)} className='btn'><i className="fa-solid fa-trash fs-4 " style={{ color: 'red' }}></i></button>
                                </div>
                              </div>
                            </div>
                          </div> :

                          < div className='mt-3 textdiv'>
                            <p className='bloghead'>{item.head}</p>

                            {
                              !item.imgurl ?
                                <video controls loop className='blogimage'>
                                  <source src={item.videourl}/>Your browser does not support HTML5 video.
                                </video>

                                :
                                !item.videurl ?
                                  <img className='blogimage img-fluid' src={item.imgurl} alt="no image" />

                                  : ""
                            }
                            < div className='icons' >
                              <div className='d-flex justify-content-between'>
                                <div className='mt-1'>
                                  {/* <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button> */}
                                  <FormControlLabel 
                                      control={<Checkbox icon={<FavoriteBorder style={{ marginLeft:'10px' }} />}
                                        checkedIcon={<Favorite style={{ color: "red" ,marginLeft:'10px'}} />}
                                        name="checkedH" />}
                                    />
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-5 " style={{ color: '#080808',marginLeft:'-10px' }}></i></button>
                                </div>
                                <div className='mt-1'>
                                  <button onClick={(id) => removeItem(item.id)} className='btn'><i className="fa-solid fa-trash fs-4 " style={{ color: 'red' }}></i></button>
                                </div>
                              </div>
                            </div>
                            <p className='blogtext'>{item.description}</p>
                            <p className='text-muted ms-5'>{d.toLocaleDateString()}</p>

                          </div>
                      ))
                      : <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>


                  }



                </div >
              ) : change === 1 ?

                (
                  <div id='seconddiv' className="col-md-6 mt-4 img-fluid postdiv">
                    <h1 className='posts phonehead'>POSTS</h1>
                    {
                      allPost?.length > 0 ?

                        allPost?.map((item) => (


                          !item.imgurl || !item.head || !item.description ?
                            ""
                            // <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>
                            :
                            <div className='mt-3'>
                              <p className='bloghead'>{item.head}</p>
                              <img className='blogimage img-fluid' src={item.imgurl} alt="" />
                              <div className='icons'>
                                <div className='d-flex justify-content-between'>
                                  <div className='mt-1'>
                                    {/* <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button> */}
                                    <FormControlLabel 
                                      control={<Checkbox icon={<FavoriteBorder style={{ marginLeft:'10px' }} />}
                                        checkedIcon={<Favorite style={{ color: "red" ,marginLeft:'10px'}} />}
                                        name="checkedH" />}
                                    />
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-5 " style={{ color: '#080808',marginLeft:'-10px' }}></i></button>
                                  </div>
                                  <div className='mt-1'>
                                    <button onClick={(id) => removeItem(item?.id)} className='btn'><i className="fa-solid fa-trash fs-4 " style={{ color: 'red' }}></i></button>
                                  </div>
                                </div>
                              </div>
                              <p className='blogtext'>{item.description}</p>
                              <p className='text-muted ms-5'>{d.toLocaleDateString()}</p>

                            </div>))
                        : <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>


                    }



                  </div >)
                : change === 2 ?
                  (
                    <div id='seconddiv' className="col-md-6 mt-4 img-fluid postdiv">
                      <h1 className='posts phonehead'>VIDEOS</h1>
                      {
                        allPost?.length > 0 ?

                          allPost?.map((item) => (


                            !item.videourl || !item.head || !item.description ?
                              ""
                              // <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>
                              :
                              <div className='mt-3'>
                                <p className='bloghead'>{item.head}</p>
                                <video controls loop className='blogimage' src={item.videourl}></video>
                                <div className='icons'>
                                  <div className='d-flex justify-content-between'>
                                    <div className='mt-1'>
                                      {/* <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button> */}
                                      <FormControlLabel 
                                      control={<Checkbox icon={<FavoriteBorder style={{ marginLeft:'10px' }} />}
                                        checkedIcon={<Favorite style={{ color: "red" ,marginLeft:'10px'}} />}
                                        name="checkedH" />}
                                    />
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-5 " style={{ color: '#080808',marginLeft:'-10px' }}></i></button>
                                    </div>
                                    <div className='mt-1'>
                                      <button onClick={(id) => removeItem(item?.id)} className='btn'><i className="fa-solid fa-trash fs-4 " style={{ color: 'red' }}></i></button>
                                    </div>
                                  </div>
                                </div>
                                <p className='blogtext'>{item.description}</p>
                                <p className='text-muted ms-5'>{d.toLocaleDateString()}</p>

                              </div>))

                          : <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>

                      }



                    </div >
                  ) :
                  (
                    <div id='seconddiv' className="col-md-6 mt-4 img-fluid postdiv">
                      <h1 className='posts phonehead'>TEXTS</h1>
                      {
                        allPost?.length > 0 ?

                          allPost?.map((item) => (


                            !item.imgurl && !item.videourl ?

                              <div className='mt-3'>
                                <p className='bloghead'>{item.head}</p>
                                <p className='blogtext'>{item.description}</p>
                                <p className='text-muted ms-5'>{d.toLocaleDateString()}</p>
                                <div className='icons'>
                                  <div className='d-flex justify-content-between'>
                                    <div className='mt-1'>
                                      {/* <button className='btn'><i className="fa-solid fa-heart fs-4" style={{ color: 'red' }}></i></button> */}
                                      <FormControlLabel 
                                      control={<Checkbox icon={<FavoriteBorder style={{ marginLeft:'10px' }} />}
                                        checkedIcon={<Favorite style={{ color: "red" ,marginLeft:'10px'}} />}
                                        name="checkedH" />}
                                    />
                                  <button className='btn'><i className="fa-solid fa-bookmark fs-5 " style={{ color: '#080808',marginLeft:'-10px' }}></i></button>
                                    </div>
                                    <div className='mt-1'>
                                      <button onClick={(id) => removeItem(item?.id)} className='btn'><i className="fa-solid fa-trash fs-4 " style={{ color: 'red' }}></i></button>
                                    </div>
                                  </div>
                                </div>
                              </div> : ""

                          ))
                          : <p className=' fs-4 text-danger  d-flex justify-content-center align-items-center'>Nothing to display!!</p>


                      }



                    </div >)
          }


          <div id='thirddiv' className="col-md-3 ">
            <h1 className='mb-5 text-center profilehead'>PROFILE</h1>
            <img className='img-fluid profilepic' src="https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg" alt="" />
            <Card className='p-1 mt-4 ms-2 card22'>
              <Card.Body>
                <Card.Title>{profile?.name}</Card.Title>
                <Card.Subtitle className="mb-4  text-muted">Age: {profile?.age}</Card.Subtitle>
                <Card.Subtitle className="mb-4  text-muted">Mobile: {profile?.phoneno}</Card.Subtitle>



              </Card.Body>
            </Card>

          </div>
        </div >
      </div >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  )
}

export default Home