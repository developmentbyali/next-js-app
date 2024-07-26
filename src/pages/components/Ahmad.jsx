import React from "react";
import { useEffect, useState } from "react";

const Ahmad = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const jsonData = await res.json();

      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data?.map((v, i) => {
        return (
          <div class="pin">
            <div class="ak">
              <div class="flex flex-wrap justify-center">
                <div class="w-6/12 sm:w-8/12 px-4">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    alt="..."
                    class="shadow rounded max-w-full h-auto align-middle border-none"
                  />

                  <br />

                  <p class="p">{v?.name}</p>
                  <br />
                  <div class="nik">
                    <button class="y">
                      <a href="https://www.youtube.com/">Link</a>
                    </button>
                    <button class="t">
                      <a href="https://www.linkedin.com/notifications/?filter=all">
                        tiktok
                      </a>
                    </button>
                    <button class="i">
                      <a href="">Insta</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="ak">
              <h1 className="text-red-600">Phone</h1>
              <h1 className="text-white">{v?.phone}</h1>
              <h1 className="text-red-600">email</h1>
              <h1 className="text-white">{v?.email}</h1>

              <h1 className="text-red-600">ID</h1>
              <h1 className="text-white">{v?.id}</h1>
              <h1 className="text-red-600">NAME</h1>
              <h1 className=" text-white">{v?.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ahmad;
