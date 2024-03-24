'use client'

import React, { TextareaHTMLAttributes } from 'react'
import { AutoTextArea } from 'react-textarea-auto-witdth-height'

interface AutoTextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "rows | cols | 'value"
  > {
  value?: string
}

export default function TextAreaAuto(props: AutoTextAreaProps) {
  return <AutoTextArea {...props}></AutoTextArea>
}
