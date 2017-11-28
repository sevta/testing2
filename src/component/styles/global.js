import React, { Component } from 'react'
import Styled , {css} from 'styled-components'

export const color = {
   red: '#FF294F'
} 

export const Button = Styled.a`
   width: 240px;
   height: 51px;
   border-radius: 30px;
   background: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff !important;
   cursor: pointer;

   ${props => props.primary && css`
      background: ${color.red};
      color: #fff !important;
   `}

   ${props => props.secondary && css`
      background: transparent;
      color: ${color.red} !important;
      border: solid 1px ${color.red};
   `}
`
