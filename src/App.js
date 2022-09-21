import { lazy, Suspense } from "react";
import {AuthProvider} from "./context/authContext"
import { createHttpLink } from "apollo-link-http";
import { ApolloClient, InMemoryCache } from '@apollo/client';
  // import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { Route, Routes } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
// import {createUploadLink} from "apollo-upload-client"
import "./App.css";
import Nav from "./components/Navbar/Nav";
const HomeLazy = lazy(() => import("./pages/Home"));
const LoginLazy = lazy(() => import("./pages/Login"));
const RegisterLazy = lazy(() => import("./pages/Register"));
const MyProfileLazy = lazy(() => import("./components/MyProfile"))
const PostListLazy= lazy(() => import("./pages/PostList"))
const ChangePasswordLazy = lazy(() => import("./components/Profile/ChangePassword"))
const SinglePost = lazy(() => import("./pages/SinglePost"))




function App() {
  const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwtToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <AuthProvider>
    <div className="App">
      <ApolloProvider client={client}>
        <Nav />
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<HomeLazy />} />
            <Route path="/login" element={<LoginLazy />} />
            <Route path="/register" element={<RegisterLazy />} />
            <Route path="/profile" element={<MyProfileLazy />} />
            <Route path="/profile" element={<MyProfileLazy />} />
            <Route path="/post" element={<PostListLazy />} />
            <Route path="/change-password" element={<ChangePasswordLazy />} />
            <Route path="/post/:postId" element={<SinglePost />} />

          </Routes>
        </Suspense>
      </ApolloProvider>
    </div>
    </AuthProvider>
  );
}

export default App;
