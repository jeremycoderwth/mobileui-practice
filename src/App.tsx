import './index.css';

const App = () => {
  return (
    <div>
      {/* this will serve as gutter */}
      <div className="sticky top-0 bg-neutral-content w-full h-10.5 text-center font-semibold">GUTTER</div>

      <main>
        {/* Hero section */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="carousel min-w-screen rounded-box">
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger" 
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
              className='w-full' />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
              className='w-full' />
          </div>
        </div>

        {/* Cards */}
        <div></div>
      </main>

      {/* this one will be the bottom gutter */}
      <div className='container w-full bg-neutral-content h-8 text-center sticky bottom-0 font-semibold'>BOTTOM GUTTER</div>
    </div>
  );
}

export default App