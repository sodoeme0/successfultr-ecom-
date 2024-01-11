import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HeaderFooter from "./components/HeaderFooter";
import Index from "./features/home/Index";
import Catalog from "./features/catalog/Catalog";
import ProductPage from "./features/product/ProductPage";
import Login from "./features/auth/Login";
import Favorite from "./features/favorite/Favorite";
import { ROLES } from "./config/roles";
import RequireAuth from "./features/auth/RequireAuth";
import PersistLogin from "./features/auth/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HeaderFooter />}>
          <Route path="/" index element={<Index />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product/:id" element={<ProductPage />} />

          <Route path="login" element={<Login />} />
          <Route element={<PersistLogin/>}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route path="favorites" element={<Favorite />} />
          </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
