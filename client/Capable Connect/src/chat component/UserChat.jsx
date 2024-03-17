import React from 'react'
import { useFetchRecipient } from '../hooks/useFetchRecipient'
import { Stack } from 'react-bootstrap';
import avatar from "../assets/undraw_pic_profile_re_7g2h.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function UserChat({chat, user}) {

    const { recipientUser } = useFetchRecipient( chat, user );

    console.log( recipientUser );

  return (
    <Stack
        direction="horizontal"
        gap={3}
        className="user-card align-items-center p-2 justify-content-between"
        role="button"
    >
        <div className='d-flex'>
            <div className="me-2">
                <img src={avatar} height="35px"/>
            </div>
            <div className="text-content">
                <div className="name">
                    {recipientUser?.name}
                </div>
                <div className="text">Text Message</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">
                04/02/2024
            </div>
            <div className="this-user-notifications">2</div>
            <span className='user-online'></span>
        </div>
    </Stack>
  )
}

export default UserChat