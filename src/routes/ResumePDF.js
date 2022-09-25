import React from 'react'
import pdf from '../documents/xinzhe.pdf'

export default function ResumePDF() {

  return (
    <div className="resume">
        <object className="pdf" type="application/pdf" data={pdf}/>
        
    </div>
  )
}
