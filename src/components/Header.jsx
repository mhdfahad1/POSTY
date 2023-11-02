import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Header.css'
import Form from 'react-bootstrap/Form';
import { addApost, addAtext, addAvideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function Header() {

  const [post, setPost] = useState({
    head: "", imgurl: "", videourl: "", description: ""
  })


  const storeData = async (e) => {
    e.preventDefault()
    console.log(post);
    if (post?.head && post?.imgurl && post?.description) {
      const data = await addApost(post)
      // alert("Post Uploaded")
      toast.success('Post Uploaded')
      setPost("")
      handleClose()

    } else {

      toast.warning("Please Type the Data")

    }

  }
  const storeVideo = async (e) => {
    e.preventDefault()
    const file = e.target.files
    // console.log(file);
    console.log(post);
    if (post?.head && post?.videourl && post?.description) {
      const data = await addAvideo(post)
      toast.success('Video Uploaded')
      setPost("")
      close()
    } else {
      toast.warning("Please Type the Data")

    }
  }

  const storeText = async () => {
    console.log(post);
    if (post.head && post.description) {
      const data = await addAtext(post)
      toast.success('Text Uploaded')
      setPost("")
      modalclose()

    } else {
      toast.warning("Please Type the Data")

    }
  }

  const extractLink = (e) => {
    console.log(e.target.files);
    let files = e.target.files;
    if (files.length === 1) {
      let file = files[0];
      setPost({
        ...post,
        videourl: URL.createObjectURL(file)
      });
    }
    console.log(post);


  }
  const convertImage = (e) => {

    const imageFile = e.target.files[0]
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.addEventListener('load', () => {
        setPost({ ...post, imgurl: reader.result })
      })
    }

  }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [display, setDisplay] = useState(false);

  const close = () => setDisplay(false);
  const show1 = () => setDisplay(true);

  const [come, setCome] = useState(false);

  const modalclose = () => setCome(false);
  const modalshow = () => setCome(true);
  return (
    <div>
      <Navbar expand="lg" className="navbar22">
        <Container>
          <Navbar.Brand href="#home"><Link className='backto text-light' to={'/'}>POSTY</Link></Navbar.Brand>
          <Navbar.Toggle className='togglebutton' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              {/* <Button className='buttons' variant="" onClick={handleShow}>
                NEW POST<i className="fa-solid fa-plus ms-1" style={{ color: "#0c0d0d;" }}></i>
              </Button> */}
              <div onClick={handleShow} className='newpost'>NEW POST<i className="fa-solid fa-plus ms-1" style={{ color: "#0c0d0d;" }}></i></div>
            </Navbar.Text>

            <Navbar.Text>
              {/* <Button variant="light" onClick={show1}>
                NEW VIDEO<i className="fa-solid fa-video ms-1" style={{ color: "#0d0d0d;" }}></i>
              </Button> */}
              <div onClick={show1} className='newpost'>NEW VIDEO<i className="fa-solid fa-video ms-1" style={{ color: "#0d0d0d;" }}></i>
              </div>

            </Navbar.Text>

            <Navbar.Text>
              {/* <Button variant="light" onClick={modalshow}>
                NEW TEXT<i className="fa-solid fa-pen ms-1" style={{ color: "#19191a;" }}></i>
              </Button> */}
              <div onClick={modalshow} className='newpost'>NEW TEXT<i className="fa-solid fa-pen ms-1" style={{ color: "#19191a;" }}></i>
              </div>

            </Navbar.Text>


          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal className='footerButton' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NEW POST</Modal.Title>
        </Modal.Header>
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control value={post.head} onChange={(f) => setPost({ ...post, head: f.target.value })} type="text" placeholder="Enter image Heading" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e) => convertImage(e)} type="file" accept='image/*' placeholder="Choose image URL" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} type="text" placeholder="enter image description" />
          </Form.Group>

        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={(e) => storeData(e)} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className='footerButton' show={display} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>NEW VIDEO</Modal.Title>
        </Modal.Header>
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control value={post.head} onChange={(e) => setPost({ ...post, head: e.target.value })} type="text" placeholder="Enter video Heading" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control accept="video/*" onChange={(e) => extractLink(e)} type="file" placeholder="choose video " />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} type="text" placeholder="enter video description" />
          </Form.Group>

        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button onClick={(e) => storeVideo(e)} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className='footerButton' show={come} onHide={modalclose}>
        <Modal.Header closeButton>
          <Modal.Title>NEW TEXT</Modal.Title>
        </Modal.Header>
        <Form className='p-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e) => setPost({ ...post, head: e.target.value })} value={post.head} type="text" placeholder="Enter text Heading" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control onChange={(e) => setPost({ ...post, description: e.target.value })} value={post.description} type="text" placeholder="enter text description" />
          </Form.Group>

        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalclose}>
            Close
          </Button>
          <Button variant="dark" onClick={() => storeText()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

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
    </div>
  )
}
export default Header