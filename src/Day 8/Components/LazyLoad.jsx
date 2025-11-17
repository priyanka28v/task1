import React,{lazy,Suspense} from 'react'

const LazyComponent=lazy(()=>import('./Product'))

// function Lazy