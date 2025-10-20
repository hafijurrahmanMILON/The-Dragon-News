import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/LeftAside";
import RightAside from "../Components/RightAside";
import { useNavigation } from "react-router";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="w-8/12 mx-auto">
      <header className="space-y-5">
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
      </header>
      <main className="mt-12 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <main className="col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </main>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
