import styled from "@emotion/styled/types/base";
import { CardHeader } from "@mui/material";
import React from "react";


const Card = () => {
 
    const CardMain = styled.div`
    verflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
 `;

   const CardHead = styled.header`
     padding-top:32px;
     padding-bottom:32px;
   `;
 
   const CardHeader = styled.h1`
   font-size:24px;
   font-weight: bold;
   text-allign:center;
   `;

     

    return(

        <main>
         <CardMain>
             <CardHead>
                 <CardHeader>Sign In</CardHeader>
             </CardHead>

             <CardBody>
                 <InputField>
                 <CardInput placeholder="Username" type="text" required />
                 </InputField>

                 <InputField>
                 <CardInput placeholder="Email" type="text" required />
                 </InputField>

                 <InputField>
                 <CardInput placeholder="Password" type="password" required />
                 <Icon className="fa fa-eye" eye small></Icon>
                 </InputField>

                 <InputField>
                  <Signupwith>Or sign up with</Signupwith> 
               
                 <Socialmediaicon>
                 <Optionitem>
                     <Icon className="fab fa-google" big/>
                 </Optionitem>

                 <Optionitem>
                     <Icon className="fab fa-twitter" big/>
                 </Optionitem>

                 <Optionitem>
                     <Icon className="fab fa-facebook" big/>
                 </Optionitem>
                 </Socialmediaicon>

                 </InputField>

                 <InputField>
                 <button type="button">Sign Up</button>
                 </InputField>

                 <InputField>
                 <link>I already have an account</link>
                 </InputField>

             </CardBody>
         </CardMain>
        </main>
    )
}


export default Card;