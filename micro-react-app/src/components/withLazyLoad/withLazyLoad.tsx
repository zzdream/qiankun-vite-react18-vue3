// /**
//  *   create by zhanghang
//  */
import { Suspense } from 'react'
// import BaseSpin from 'components/BaseSpin/BaseSpin'

import './withLazyLoad.less'

const withLazyLoad = (WrappedComponent: any) => (props: any) =>
  (
    <Suspense
      fallback={
        <div className='baseSpin-wrap' style={{ width: '100%' }}>
          {/* <BaseSpin /> */}
        </div>
      }
    >
      <WrappedComponent {...props} />
    </Suspense>
  )

export default withLazyLoad

// import { Suspense, lazy } from 'react'
// export type withLazyLoadFactory = () => Promise<{ default: React.ComponentType<any> }>
// // export type withLazyLoadProps = {
// //   fallback?: React.ReactNode
// //   [k: string]: any
// // }

// export default function withLazyLoad(factory: withLazyLoadFactory) {
//   // const { fallback, ...childrenProps } = props
//   const Element = lazy(factory)

//   return (
//     <Suspense
//       fallback={
//         <div className='baseSpin-wrap' style={{ width: '100%' }}>
//           {/* <BaseSpin /> */}
//           111
//         </div>
//       }
//     >
//       <Element />
//     </Suspense>
//   )
// }
