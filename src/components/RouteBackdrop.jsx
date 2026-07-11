const routeStops = [
  { className: 'stop-tampico', label: 'Tampico' },
  { className: 'stop-madero', label: 'Madero' },
  { className: 'stop-altamira', label: 'Altamira' },
]

export function RouteBackdrop() {
  return (
    <div className="route-backdrop" aria-hidden="true">
      <svg
        className="route-network route-network-main"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="map-road map-road-muted"
          d="M-120 655 C 130 530, 292 612, 494 482 S 860 242, 1110 340 1398 236, 1540 94"
        />
        <path
          className="map-road map-road-blue"
          d="M-60 355 C 160 315, 290 390, 454 334 S 725 186, 916 258 1180 500, 1530 430"
        />
        <path
          className="map-road map-road-yellow"
          d="M220 962 C 250 778, 392 694, 548 662 S 838 620, 962 500 1118 290, 1348 242"
        />
        <path
          className="map-road map-road-green"
          d="M72 106 C 210 212, 344 230, 475 198 S 680 98, 860 154 1020 306, 1290 290"
        />
      </svg>

      <svg
        className="route-network route-network-mobile"
        viewBox="0 0 430 932"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="map-road map-road-muted"
          d="M-80 690 C 82 582, 110 490, 242 440 S 322 262, 512 210"
        />
        <path
          className="map-road map-road-blue"
          d="M-45 258 C 72 310, 110 370, 224 334 S 310 222, 474 272"
        />
        <path
          className="map-road map-road-yellow"
          d="M354 1010 C 388 842, 392 714, 380 580 S 398 398, 488 316"
        />
      </svg>

      <div className="route-label route-label-main">R7</div>
      <div className="route-label route-label-alt">R1</div>

      {routeStops.map((stop) => (
        <div className={`floating-stop ${stop.className}`} key={stop.label}>
          <span />
          {stop.label}
        </div>
      ))}
    </div>
  )
}
