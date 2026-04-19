/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProfessionalIndex from "./pages/ProfessionalIndex";
import GeekIndex from "./pages/GeekIndex";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import CollectionIndex from "./pages/CollectionIndex";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfessionalIndex />} />
          <Route path="/projects" element={<ProfessionalIndex />} />
          <Route path="/collection" element={<CollectionIndex />} />
          <Route path="/geek" element={<GeekIndex />} />
          <Route path="/me" element={<GeekIndex />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}
