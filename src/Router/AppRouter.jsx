import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import { routes } from "./Routes";

const AppRouter = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
      {routes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}
    </Route>
    <Route path="*" element={<img src="https://www.bypeople.com/wp-content/uploads/2016/03/2016-03-10_15-44-42.gif" style={{ height: "100%", width: "100%" }}></img>}/>
  </Routes>
  )
}

export default AppRouter