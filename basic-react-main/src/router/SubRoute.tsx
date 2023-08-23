/**
 *   create by zhanghang
 */

import { memo } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import asyncRouter from './router'
import { InterRouteConfig } from './router.d'
import Home from '@/layout/Home'
// import { Login } from './router'
const unityUrl = '/' + process.env.VITE_NAME
function SubRoute(): JSX.Element | null {
  return (
    <Switch>
      {/* <Route path={unityUrl + '/login'} exact={true} component={Login} /> */}
      <Home>
        <CacheSwitch>
          {asyncRouter.map((item: InterRouteConfig) => {
            return item.isUseCache ? (
              <CacheRoute
                className={item.class}
                path={item.path}
                exact={item.exact}
                key={item.name}
                cacheKey={item.code}
                component={item.components}
              />
            ) : (
              <Route path={item.path} exact={item.exact} key={item.name} component={item.components} />
            )
          })}
          <Route path='/' render={() => <Redirect to={unityUrl + '/page1'} />} />
        </CacheSwitch>
      </Home>
    </Switch>
  )
}

export default memo(SubRoute)
