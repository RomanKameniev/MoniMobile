import React, {PureComponent} from 'react';
import {View} from 'react-native';
import Svg, {Path, Circle, Line, Ellipse, Rect, G} from 'react-native-svg';

export default class Icon extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {icon, style} = this.props;
    return (
      <View style={style}>
        {icon === 'device' && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.755"
            height="26.256"
            viewBox="0 0 26.755 26.256">
            <G id="чайник" transform="translate(0 0.007)">
              <Path
                id="Path_90"
                data-name="Path 90"
                d="M22.822,26.256a.461.461,0,0,0,.442-.582,2.573,2.573,0,0,0-2.489-1.92H4.732a2.574,2.574,0,0,0-2.489,1.919.461.461,0,0,0,.443.583Z"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_91"
                data-name="Path 91"
                d="M20.32,23.752a2.245,2.245,0,0,0,.282-.132c4.208-2.447-.785-16.263-1.9-19.179a.841.841,0,0,0-.79-.543H7.592a.841.841,0,0,0-.79.543C5.688,7.357.7,21.173,4.908,23.62a2.212,2.212,0,0,0,.278.132"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_92"
                data-name="Path 92"
                d="M7.5,3.907a.259.259,0,0,1,.055-.256c4.632-5.189,8.913-1.378,10.187,0a.266.266,0,0,1,.064.247"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_93"
                data-name="Path 93"
                d="M4.728,10.7,1.921,6.38H6.1"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_94"
                data-name="Path 94"
                d="M22.261,19.279h1.165a1.618,1.618,0,0,0,1.619-1.617V8.093a1.618,1.618,0,0,0-1.617-1.619H22.1a1.618,1.618,0,0,0-1.619,1.617V9.672"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_95"
                data-name="Path 95"
                d="M22.088,21.193h1.451a3.715,3.715,0,0,0,3.716-3.714V8.13A3.715,3.715,0,0,0,23.54,4.414H18.7"
                transform="translate(-1 -0.507)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </G>
          </Svg>
        )}
        {icon === 'users' && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.259"
            height="25.001"
            viewBox="0 0 32.259 25.001">
            <G id="юзеры" transform="translate(0 0.037)">
              <Path
                id="Path_96"
                data-name="Path 96"
                d="M15.836,11.241a11.468,11.468,0,0,1,4.2,4.291c.007-.008.007,0,.007,0a19.562,19.562,0,0,1,2.511,10.006L1.64,25.4c.042-6.391,2.792-11.845,6.652-14.062"
                transform="translate(-1.137 -1.146)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Ellipse
                id="Ellipse_121"
                data-name="Ellipse 121"
                cx="5.751"
                cy="5.136"
                rx="5.751"
                ry="5.136"
                transform="translate(5.72 11.968) rotate(-89.624)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_97"
                data-name="Path 97"
                d="M16.313,25.5l16.582.109c.034-5.176-2.182-9.6-5.326-11.331"
                transform="translate(-1.137 -1.146)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_98"
                data-name="Path 98"
                d="M21.589,14.344a8.04,8.04,0,0,0-1.549,1.19h-.007"
                transform="translate(-1.137 -1.146)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Ellipse
                id="Ellipse_122"
                data-name="Ellipse 122"
                cx="4.561"
                cy="4.074"
                rx="4.561"
                ry="4.074"
                transform="translate(19.314 14.606) rotate(-89.624)"
                fill="none"
                stroke="#858585"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </G>
          </Svg>
        )}
        {icon === 'qrcode' && (
          <Svg
            id="QR_код"
            data-name="QR код"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23.836"
            viewBox="0 0 24 23.836">
            <Rect
              id="Rectangle_23"
              data-name="Rectangle 23"
              width="9.529"
              height="9.529"
              transform="translate(0.5 0.5)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Rect
              id="Rectangle_24"
              data-name="Rectangle 24"
              width="9.529"
              height="9.529"
              transform="translate(13.889 0.5)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Rect
              id="Rectangle_25"
              data-name="Rectangle 25"
              width="9.529"
              height="9.529"
              transform="translate(0.5 13.807)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Path
              id="Path_102"
              data-name="Path 102"
              d="M17.614,14.725H15.807v9.529h1.807"
              transform="translate(-2 -1)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Line
              id="Line_23"
              data-name="Line 23"
              x2="2.793"
              transform="translate(18.079 13.725)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Line
              id="Line_24"
              data-name="Line 24"
              x2="1.486"
              transform="translate(22.514 13.725)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Line
              id="Line_25"
              data-name="Line 25"
              x2="0.986"
              transform="translate(18.079 23.336)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Path
              id="Path_103"
              data-name="Path 103"
              d="M22.954,17.929H20.161v3.614H22.79"
              transform="translate(-2 -1)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Path
              id="Path_104"
              data-name="Path 104"
              d="M25.5,17.847v6.407H23.364"
              transform="translate(-2 -1)"
              fill="none"
              stroke="#858585"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <Rect
              id="Rectangle_26"
              data-name="Rectangle 26"
              width="3.779"
              height="3.779"
              transform="translate(3.293 3.375)"
              fill="#858585"
            />
            <Rect
              id="Rectangle_27"
              data-name="Rectangle 27"
              width="3.779"
              height="3.779"
              transform="translate(16.6 3.375)"
              fill="#858585"
            />
            <Rect
              id="Rectangle_28"
              data-name="Rectangle 28"
              width="3.779"
              height="3.779"
              transform="translate(3.293 16.518)"
              fill="#858585"
            />
          </Svg>
        )}
        {icon === 'more' && (
          <Svg
            id="ещё"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23">
            <Circle
              id="Ellipse_123"
              data-name="Ellipse 124"
              cx="4.5"
              cy="4.5"
              r="4.5"
              fill="#858585"
            />
            <Circle
              id="Ellipse_124"
              data-name="Ellipse 124"
              cx="4.5"
              cy="4.5"
              r="4.5"
              transform="translate(0 14)"
              fill="#858585"
            />
            <Circle
              id="Ellipse_125"
              data-name="Ellipse 125"
              cx="4.5"
              cy="4.5"
              r="4.5"
              transform="translate(14 14)"
              fill="#858585"
            />
            <Circle
              id="Ellipse_126"
              data-name="Ellipse 126"
              cx="4.5"
              cy="4.5"
              r="4.5"
              transform="translate(14)"
              fill="#858585"
            />
          </Svg>
        )}

        {icon === 'settings' && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.909"
            height="23.909"
            viewBox="0 0 23.909 23.909">
            <G
              id="_настройки"
              data-name=" настройки"
              transform="translate(0 -0.001)">
              <G
                id="Group_2"
                data-name="Group 2"
                transform="translate(0 0.001)">
                <G id="Group_1" data-name="Group 1" transform="translate(0 0)">
                  <Path
                    id="Path_5"
                    data-name="Path 5"
                    d="M22.685,9.446l-1.678-.285a9.476,9.476,0,0,0-.674-1.628l.989-1.383a1.472,1.472,0,0,0-.16-1.9L19.673,2.758a1.466,1.466,0,0,0-1.044-.435,1.451,1.451,0,0,0-.854.275l-1.388.989A9.377,9.377,0,0,0,14.7,2.893l-.28-1.658A1.475,1.475,0,0,0,12.961,0h-2.1A1.475,1.475,0,0,0,9.4,1.235l-.29,1.7a9.242,9.242,0,0,0-1.623.684L6.113,2.628a1.475,1.475,0,0,0-1.9.16L2.717,4.276a1.478,1.478,0,0,0-.16,1.9l1,1.4a9.256,9.256,0,0,0-.664,1.633L1.234,9.5A1.475,1.475,0,0,0,0,10.954v2.1a1.475,1.475,0,0,0,1.234,1.458l1.7.29a9.242,9.242,0,0,0,.684,1.623L2.632,17.8a1.472,1.472,0,0,0,.16,1.9L4.28,21.188a1.466,1.466,0,0,0,1.044.435,1.451,1.451,0,0,0,.854-.275l1.4-1A9.448,9.448,0,0,0,9.16,21l.28,1.678A1.475,1.475,0,0,0,10.9,23.91h2.108a1.475,1.475,0,0,0,1.458-1.234L14.749,21a9.476,9.476,0,0,0,1.628-.674l1.383.989a1.466,1.466,0,0,0,.859.275h0a1.466,1.466,0,0,0,1.044-.435l1.488-1.488a1.478,1.478,0,0,0,.16-1.9l-.989-1.388A9.408,9.408,0,0,0,21,14.745l1.678-.28a1.475,1.475,0,0,0,1.234-1.458V10.9A1.458,1.458,0,0,0,22.685,9.446Zm-.115,3.561a.129.129,0,0,1-.11.13l-2.1.35a.671.671,0,0,0-.539.494,8,8,0,0,1-.869,2.093.675.675,0,0,0,.03.734l1.234,1.738a.136.136,0,0,1-.015.17L18.715,20.2a.127.127,0,0,1-.095.04.123.123,0,0,1-.075-.025l-1.733-1.234a.675.675,0,0,0-.734-.03,8,8,0,0,1-2.093.869.663.663,0,0,0-.494.539l-.355,2.1a.129.129,0,0,1-.13.11H10.9a.129.129,0,0,1-.13-.11l-.35-2.1a.671.671,0,0,0-.494-.539,8.3,8.3,0,0,1-2.048-.839.691.691,0,0,0-.34-.09.658.658,0,0,0-.39.125L5.4,20.264a.149.149,0,0,1-.075.025.134.134,0,0,1-.095-.04L3.746,18.76a.135.135,0,0,1-.015-.17L4.96,16.868a.684.684,0,0,0,.03-.739,7.92,7.92,0,0,1-.879-2.088.684.684,0,0,0-.539-.494l-2.113-.36a.129.129,0,0,1-.11-.13v-2.1a.129.129,0,0,1,.11-.13l2.083-.35a.675.675,0,0,0,.544-.5,7.987,7.987,0,0,1,.854-2.1A.667.667,0,0,0,4.9,7.148L3.661,5.4a.136.136,0,0,1,.015-.17L5.164,3.742a.127.127,0,0,1,.095-.04.123.123,0,0,1,.075.025L7.057,4.956a.684.684,0,0,0,.739.03,7.92,7.92,0,0,1,2.088-.879.684.684,0,0,0,.494-.539l.36-2.113a.129.129,0,0,1,.13-.11h2.1a.129.129,0,0,1,.13.11l.35,2.083a.675.675,0,0,0,.5.544,8.107,8.107,0,0,1,2.143.879.675.675,0,0,0,.734-.03L18.55,3.692a.149.149,0,0,1,.075-.025.134.134,0,0,1,.095.04L20.208,5.2a.135.135,0,0,1,.015.17L18.989,7.1a.675.675,0,0,0-.03.734,8,8,0,0,1,.869,2.093.663.663,0,0,0,.539.494l2.1.355a.129.129,0,0,1,.11.13v2.1Z"
                    transform="translate(0 -0.001)"
                    fill="#fff"
                  />
                  <Path
                    id="Path_6"
                    data-name="Path 6"
                    d="M141.259,136a5.159,5.159,0,1,0,5.159,5.159A5.163,5.163,0,0,0,141.259,136Zm0,8.97a3.811,3.811,0,1,1,3.811-3.811A3.813,3.813,0,0,1,141.259,144.971Z"
                    transform="translate(-129.302 -129.208)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
          </Svg>
        )}
        {icon === 'pay' && (
          <Svg
            id="иконка_оплатить"
            data-name="иконка оплатить"
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55">
            <Circle
              id="Ellipse_6-2"
              data-name="Ellipse 6-2"
              cx="27.5"
              cy="27.5"
              r="27.5"
              fill="#fff"
            />
            <G
              id="Group_36"
              data-name="Group 36"
              transform="translate(11.995 17.791)">
              <Rect
                id="Rectangle_11"
                data-name="Rectangle 11"
                width="22.018"
                height="13.63"
                rx="1.958"
                transform="translate(9.777 6.718)"
                fill="none"
                stroke="#1a4b72"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_81"
                data-name="Path 81"
                d="M42.019,33.51V27.991a1.2,1.2,0,0,0-1.2-1.2H21.2a1.2,1.2,0,0,0-1.2,1.2V39.229a1.2,1.2,0,0,0,1.2,1.2H29.77"
                transform="translate(-19.995 -26.791)"
                fill="none"
                stroke="#1a4b72"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Line
                id="Line_13"
                data-name="Line 13"
                x2="17.712"
                transform="translate(11.946 17.529)"
                fill="none"
                stroke="#1a4b72"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Line
                id="Line_14"
                data-name="Line 14"
                x2="3.777"
                transform="translate(12.139 10.21)"
                fill="none"
                stroke="#1a4b72"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Line
                id="Line_15"
                data-name="Line 15"
                x2="6.22"
                transform="translate(12.139 12.037)"
                fill="none"
                stroke="#1a4b72"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Circle
                id="Ellipse_115"
                data-name="Ellipse 115"
                cx="2.094"
                cy="2.094"
                r="2.094"
                transform="translate(22.634 8.76)"
                fill="#1a4b72"
              />
              <Circle
                id="Ellipse_116"
                data-name="Ellipse 116"
                cx="2.094"
                cy="2.094"
                r="2.094"
                transform="translate(25.775 8.76)"
                fill="#1a4b72"
              />
              <Path
                id="Path_88"
                data-name="Path 88"
                d="M20.03,29.356H42.018V31.8H20.03Z"
                transform="translate(-19.995 -26.791)"
                fill="#1a4b72"
              />
            </G>
          </Svg>
        )}
        {icon === 'stats' && (
          <Svg
            id="иконка_статистика"
            data-name="иконка статистика"
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55">
            <Circle
              id="Ellipse_8-2"
              data-name="Ellipse 8-2"
              cx="27.5"
              cy="27.5"
              r="27.5"
              fill="#fff"
            />
            <G id="Group_38" data-name="Group 38">
              <Path
                id="Path_84"
                data-name="Path 84"
                d="M33.689,20.971c-8.779.678-15.147,9.948-10.709,19.415a11.4,11.4,0,0,0,5.473,5.473C37.92,50.3,47.19,43.929,47.867,35.15a.961.961,0,0,0-.891-1.027l-.069,0H35.678a.959.959,0,0,1-.959-.959V21.932a.962.962,0,0,0-.961-.963Z"
                transform="translate(-7 -6)"
                fill="none"
                stroke="#277fa5"
                stroke-width="1"
              />
              <Path
                id="Path_85"
                data-name="Path 85"
                d="M36.156,20.493V31.722a.959.959,0,0,0,.959.959H48.344a.963.963,0,0,0,.963-.963q0-.035,0-.07A13.189,13.189,0,0,0,37.188,19.532a.963.963,0,0,0-1.03.892C36.157,20.447,36.156,20.47,36.156,20.493Z"
                transform="translate(-7 -6)"
                fill="#277fa5"
              />
            </G>
          </Svg>
        )}
        {icon === 'devide' && (
          <Svg
            id="иконка_разделить_на_всех"
            data-name="иконка разделить  на всех"
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55">
            <Circle
              id="Ellipse_7-2"
              data-name="Ellipse 7-2"
              cx="27.5"
              cy="27.5"
              r="27.5"
              fill="#fff"
            />
            <G id="Group_37" data-name="Group 37">
              <Line
                id="Line_17"
                data-name="Line 17"
                y1="13.357"
                transform="translate(27.648 14.826)"
                fill="none"
                stroke="#20668c"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Line
                id="Line_18"
                data-name="Line 18"
                x1="11.612"
                y1="6.602"
                transform="translate(27.848 28.438)"
                fill="none"
                stroke="#20668c"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Line
                id="Line_19"
                data-name="Line 19"
                y1="6.602"
                x2="11.612"
                transform="translate(15.837 28.438)"
                fill="none"
                stroke="#20668c"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
              <Path
                id="Path_89"
                data-name="Path 89"
                d="M26.289,26.072a3.452,3.452,0,1,1-3.452,3.452h0a3.452,3.452,0,0,1,3.452-3.452Z"
                transform="translate(-7 -7)"
                fill="#20668c"
              />
              <Path
                id="Path_87"
                data-name="Path 87"
                d="M42.4,26.072a3.452,3.452,0,1,1-3.452,3.452h0A3.452,3.452,0,0,1,42.4,26.072Z"
                transform="translate(-7 -7)"
                fill="#20668c"
              />
              <Path
                id="Path_86"
                data-name="Path 86"
                d="M34.344,40.169a3.452,3.452,0,1,1-3.452,3.452h0a3.452,3.452,0,0,1,3.452-3.452Z"
                transform="translate(-7 -7)"
                fill="#20668c"
              />
            </G>
          </Svg>
        )}
      </View>
    );
  }
}
