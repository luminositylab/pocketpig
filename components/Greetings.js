import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NeuButton } from 'react-native-neu-element'
import Header from './Header';
import Svg, { Circle, Path } from "react-native-svg"


const Greetings = ({
    navigation
}) => 
{
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return(
    <View>
        <Header level = {"Level 1"} chapterTitle = {"Savings"} chapterLine = {"To save or not to save"}/>
        <View style = {styles.container}>
            <View style = {styles.inRow}>
                <Svg
                    width={52}
                    height={52}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <Circle
                cx={26}
                cy={26}
                r={23}
                fill="#EDF0EF"
                stroke="#D0CECE"
                strokeWidth={6}
                />
                <Path d="M19.17 32.89C19.85 32.35 20.16 32.1 20.1 32.14C22.06 30.52 23.6 29.19 24.72 28.15C25.86 27.11 26.82 26.02 27.6 24.88C28.38 23.74 28.77 22.63 28.77 21.55C28.77 20.73 28.58 20.09 28.2 19.63C27.82 19.17 27.25 18.94 26.49 18.94C25.73 18.94 25.13 19.23 24.69 19.81C24.27 20.37 24.06 21.17 24.06 22.21H19.11C19.15 20.51 19.51 19.09 20.19 17.95C20.89 16.81 21.8 15.97 22.92 15.43C24.06 14.89 25.32 14.62 26.7 14.62C29.08 14.62 30.87 15.23 32.07 16.45C33.29 17.67 33.9 19.26 33.9 21.22C33.9 23.36 33.17 25.35 31.71 27.19C30.25 29.01 28.39 30.79 26.13 32.53H34.23V36.7H19.17V32.89Z" fill="#000" />
                </Svg>
                <View style = {styles.styleTitle}>
                    <Text style = {styles.styleHeading}>Wow, great work!</Text>
                </View>
            </View>
        </View>
        <View style = {styles.inRow}>
            <Text style={styles.heading}>You are really getting the hang of this.</Text>
            <Svg
                style={styles.styleSvg}
                width={101}
                height={105}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                d="m84.795 27.064-.213-.205c-.35-.213-.776-.3-1.051-.637a1.842 1.842 0 0 0-.486-1.01c-1.582-1.85-3.184-3.676-4.939-5.37-2.505-2.426-5.304-4.34-8.677-5.327-4.354-1.278-8.755-2.349-13.314-2.508-2.745-.097-5.503-.1-8.215.345-4.997.81-9.27 3.43-13.66 5.727-1.747.914-3.43 1.947-5.142 2.926a36.109 36.109 0 0 0-3.807-3.077c-1.947-1.437-3.678-3.203-6.02-4.044-2.257-.81-4.55-1.348-6.873-.248-.92.434-1.734 1.008-1.928 2.122a4.43 4.43 0 0 0-.637 2.462c0 1.124.332 2.192.585 3.265.923 3.907 2.392 7.623 3.986 11.295.304.698.525 1.44 1.116 1.976-.54 1.157-1.079 2.32-1.64 3.468a85.775 85.775 0 0 0-4.314 10.68c-.978 2.94-1.739 5.9-1.617 9.036.043 1.119.364 2.181.472 3.282l-.081.566a3.53 3.53 0 0 0-1.6 2.45c-.738 4.194-.042 8.122 2.287 11.754.78 1.214 1.777 2.209 2.678 3.306 2.604 3.171 5.716 5.42 9.9 5.916.162.05.315.122.456.216 2.087 1.83 4.409 1.79 6.843.865.202-.04.47 0 .599-.132 1.798-1.677 3.632-.99 5.476-.11.032.011.066.02.1.026 1.556.356 2.898.92 2.83 2.878 0 .086.1.175.154.27.21 3.316 1.513 5.82 4.867 7.01 3.762 1.326 7.28.758 10.562-1.27 1.998-1.233 2.28-3.363 2.248-5.525.06-.138.116-.27.176-.415 2.157-.432 4.287-1.05 6.42-1.618 2.264-.61 3.755-2.635 6.066-3.093.105-.019.178-.2.27-.307h.604c1.696 1.17 3.505.92 5.282.318 2.122-.723 3.57-2.157 3.917-4.457.127-.85 0-1.734.27-2.575.27-.227.148-.54.205-.83.44-.02.66-.368.92-.637 1.693-1.747 3.167-3.68 4.715-5.55 2.243-2.696 3.931-5.705 4.789-9.135.596-2.386 1.291-4.745 1.642-7.188.401-2.802.323-5.603.126-8.416-.134-1.909-.539-3.775-.91-5.627-.63-3.106-1.549-6.107-3.188-8.855-.31-.52-.809-.979-.78-1.666 1.141.356 2.196.048 3.21-.453a1.174 1.174 0 0 1 .89-.149c2.313.65 3.858-.539 5.2-2.186a.855.855 0 0 0-1.046-1.322 4.75 4.75 0 0 0-.776.51c-.707.504-1.51.855-2.343.615-.67-.194-.443-1-.626-1.53-.056-.164-.092-.339-.162-.495-.393-.88-1.44-1.575-2.11-1.416-.923.219-1.349.974-1.403 2.157-.049.984.701 1.618.944 2.47-1.227.456-2.181-.35-3.236-.54l-.01.012Z"
                fill="#FEFEFE"
                />
                <Path
                d="M29.088 21.005c1.712-.979 3.394-2.012 5.141-2.926 4.39-2.297 8.663-4.913 13.66-5.727 2.712-.445 5.47-.442 8.215-.345 4.56.16 8.96 1.23 13.314 2.508 3.374.986 6.172 2.912 8.677 5.328 1.755 1.693 3.357 3.505 4.94 5.368.267.277.44.63.496 1.011-.391.054-.898-.175-1.127.27-.2.394.113.755.407.96.95.663 1.858 1.413 3.03 1.682l.413.238c-.03.687.47 1.146.78 1.666 1.639 2.748 2.558 5.749 3.186 8.855.375 1.863.777 3.718.912 5.627.197 2.813.27 5.614-.127 8.416-.35 2.443-1.046 4.802-1.642 7.188-.858 3.43-2.545 6.429-4.789 9.136-1.547 1.868-3.022 3.802-4.715 5.549-.27.27-.48.617-.92.636.06-1.992 1.052-4.004-.143-5.97-.148-.248.06-.444.146-.668 1.154-2.999 1.82-6.073 1.459-9.31-.758-6.798-4.371-11.795-9.939-15.454a26.076 26.076 0 0 0-9.167-3.818 1.273 1.273 0 0 1-1.012-.793 7.172 7.172 0 0 0-.779-1.348c-1.173-1.618-2.192-3.465-4.233-4.155-2.04-.69-4.109-1.122-6.228-.504-1.052.307-2.324.234-2.985 1.402-2.251 1.219-4.044 3.104-3.141 5.45-1.758.301-3.4.967-5.05 1.598a33.472 33.472 0 0 0-10.969 6.822 24.667 24.667 0 0 0-6.282 9.438c-.143.374-.305.606-.726.568-1.412-.895-3.03-1.15-4.624-1.44a3.818 3.818 0 0 0-2.426.394c-1.526.76-2.92 1.74-4.411 2.551-.108-1.1-.43-2.157-.472-3.282-.119-3.135.642-6.096 1.618-9.035a85.765 85.765 0 0 1 4.314-10.68c.56-1.15 1.092-2.311 1.639-3.468.426.13.838.332 1.31.18.882-.309 1.73-.707 2.532-1.189 2.07-1.137 4.088-2.426 6.536-2.726.555-.07.809-.463.9-.997.993.148 1.618-.41 1.942-1.216 1.051-2.554 1.47-5.145.34-7.79Zm11.087 7.307.218.218c.164.631.688.594 1.17.626 1.685.116 3.023-.741 4.314-1.637 4.341-3.041 8.822-5.81 13.751-7.795.81-.318 1.589-.752 1.917-1.658.421-.669.07-1.106-.52-1.286-.852-.27-1.74-.515-2.648-.343a25.745 25.745 0 0 0-9.758 3.95c-1.92 1.29-3.774 2.662-5.786 3.84a7.247 7.247 0 0 0-2.736 2.659c-.168.302-.54.62-.127 1.01a.483.483 0 0 0 .224.43l-.02-.014ZM16.987 46.995a4.405 4.405 0 0 0-.391-1.987c-.572-1.11-1.82-1.308-2.53-.294a5.487 5.487 0 0 0-.765 5.053 1.468 1.468 0 0 0 1.272 1.079 1.588 1.588 0 0 0 1.497-.777c.601-.912.92-1.981.917-3.074Z"
                fill="#EFF5F6"
                />
                <Path
                d="M46.044 35.835c.66-1.168 1.934-1.095 2.985-1.402 2.12-.618 4.214-.175 6.228.504 2.015.68 3.06 2.527 4.234 4.155.308.42.569.872.779 1.348a1.273 1.273 0 0 0 1.011.793 26.076 26.076 0 0 1 9.167 3.818c5.568 3.66 9.181 8.656 9.939 15.453.361 3.236-.305 6.313-1.459 9.31-.086.225-.294.422-.145.67 1.194 1.965.202 3.977.142 5.97-.056.269.07.603-.204.83a.854.854 0 0 0-.634.305c-1.85 1.776-4.001 3.14-6.118 4.564-.906.61-1.96 1.014-2.715 1.845h-.604c-.928-.81-1.782-1.348-3.09-.483-2.427 1.642-5.255 2.478-8.048 3.309-1.548.46-1.618.512-1.618 2.197-.06.138-.116.27-.175.415-1.502 0-2.931.472-4.39.734-3.413.612-6.792.793-10.176-.154-1.03-.288-2.03-.7-3.111-.79-.054-.086-.157-.175-.154-.27.068-1.957-1.275-2.52-2.831-2.877a.616.616 0 0 1-.1-.026c-1.844-.88-3.678-1.567-5.476.11-.13.121-.396.092-.599.132-.19-.666-.843-.771-1.331-1.03-1.305-.685-1.349-.793-.27-1.677a31.051 31.051 0 0 1 2.537-1.96c1.941-1.273 2.74-2.918 2.257-5.277a59.384 59.384 0 0 1-.49-2.84c2.27.09 4.54-.222 6.702-.921.512-.162.677-.232.742.539.15 1.887.226 3.904 1.56 5.463 2.066 2.405 4.895 2.74 7.798 2.588a14.692 14.692 0 0 0 3.867-.739c3.34-1.124 6.36-2.572 7.19-6.471.092-.42.34-.54.667-.448 1.078.327 2.127.132 3.195-.021 2.427-.345 4.783-.898 6.832-2.314 2.05-1.415 3.646-3.047 3.352-5.794-.073-.69-.297-1.348-.21-2.066.094-.77-.213-1.413-.605-2.057-1.124-1.847-2.917-2.564-4.893-3.06-1.243-.31-2.524-.073-3.824-.284.048-.163.114-.32.197-.469 1.135-1.445 1.734-2.995 1.02-4.834a1.586 1.586 0 0 1-.052-.723c.192-1.71-.639-2.934-1.847-3.99-.27-.23-.553-.572-.884-.448-.402.148-.208.617-.197.935.092 2.602-.224 5.142-1.316 7.52-.56 1.225-1.21 2.487-2.877 2.511.065-.232.224-.485.176-.69-.588-2.392-.437-4.88-1.006-7.28-.99-4.18-2.362-8.214-4.883-11.722-1.48-2.025-3.34-3.683-6.245-2.901Z"
                fill="#D1E3E6"
                />
                <Path
                d="M31.608 73.512c.146.949.302 1.911.491 2.839.483 2.36-.315 4.004-2.257 5.277a31.051 31.051 0 0 0-2.537 1.96c-1.078.884-1.04.992.27 1.677.488.27 1.14.364 1.332 1.03-2.427.925-4.756.965-6.843-.865a1.778 1.778 0 0 0-.456-.216c-1.116-1.626-1.42-3.513-1.712-5.401 1.434.442 2.13 1.83 3.319 2.594.574.37 1.21 1.195 1.707.992.65-.27.768-1.278.809-2.014.207-4.058-.416-7.879-2.832-11.344-3.505-5.023-8.223-7.55-14.311-7.606-.081-.213-.165-.424-.248-.634l.08-.566c1.492-.809 2.886-1.79 4.412-2.55a3.818 3.818 0 0 1 2.426-.395c1.594.289 3.212.54 4.624 1.44.065.114.119.31.197.321.963.132 1.672.69 2.397 1.284.882.717 1.648 1.58 2.643 2.157.27.361.12.908.517 1.224 1.904 1.526 2.84 3.837 4.498 5.56.22.232.086.526.142.763.219.925.24 2 1.332 2.473Z"
                fill="#B0CED6"
                />
                <Path
                d="M8.337 61.793c.084.21.167.42.248.634.38 1.73.942 3.415 1.677 5.026-.49 1.502-.205 2.923.494 4.27.574 1.115 1.569 1.516 2.64 1.152a.969.969 0 0 1 .177.105c2.109 1.934 3.756 4.315 6.072 6.054.246.186.24.482.251.76.291 1.888.585 3.775 1.707 5.41-4.185-.497-7.296-2.746-9.901-5.917-.9-1.097-1.887-2.092-2.677-3.306-2.33-3.632-3.026-7.55-2.287-11.753a3.53 3.53 0 0 1 1.599-2.435Z"
                fill="#EFF5F6"
                />
                <Path
                d="M29.087 21.005c1.13 2.645.712 5.236-.34 7.776-.334.81-.948 1.365-1.94 1.216-.27-.52-.54-1.054-.844-1.56-1.594-2.654-3.527-5.067-5.436-7.492-1.55-1.968-3.27-3.812-5.393-5.177-1.593-1.024-2.912-1.72-4.664 0 .194-1.113 1.008-1.688 1.928-2.122 2.324-1.105 4.616-.558 6.872.248 2.343.836 4.075 2.603 6.021 4.045a36.104 36.104 0 0 1 3.796 3.066Z"
                fill="#D1E3E6"
                />
                <Path
                d="M38.06 89.218c1.08.089 2.082.501 3.112.79 3.384.947 6.763.766 10.176.154 1.459-.27 2.888-.726 4.39-.734.032 2.157-.251 4.293-2.25 5.525-3.283 2.028-6.8 2.597-10.56 1.27-3.355-1.183-4.657-3.688-4.867-7.005ZM10.47 15.763c1.752-1.715 3.07-1.02 4.664 0 2.122 1.364 3.842 3.209 5.393 5.177 1.909 2.427 3.842 4.837 5.435 7.49.305.508.564 1.041.844 1.562-.078.54-.345.927-.9.998-2.427.312-4.465 1.601-6.544 2.758a13.8 13.8 0 0 1-2.532 1.19c-.472.15-.884-.052-1.31-.182-.59-.539-.81-1.278-1.117-1.976-1.593-3.659-3.063-7.383-3.985-11.29-.253-1.078-.58-2.14-.585-3.265a4.43 4.43 0 0 1 .637-2.462Zm5.877 17.562c.12.253.27.226.41.03h.203c2.57-1.114 4.899-2.748 7.63-3.506a.474.474 0 0 0 .237-.774c-.585-.809-.943-1.782-1.78-2.405a43.46 43.46 0 0 0-5.583-7.105c-.828-.863-1.704-1.731-2.837-2.257-1.52-.709-2.62-.048-2.696 1.648-.04 1.013.248 1.987.41 2.966.453 2.793 1.165 5.52 2.604 7.973a10.36 10.36 0 0 1 1.402 3.43ZM86.254 29.39l-.412-.237c-.165-.792-.995-1.248-1.052-2.095 1.06.192 2.014.998 3.236.54-.243-.847-.993-1.486-.944-2.47.056-1.192.48-1.947 1.402-2.157.671-.16 1.718.539 2.111 1.415.07.157.105.332.162.496.183.54-.043 1.348.625 1.53.834.24 1.637-.111 2.343-.616.242-.194.502-.365.777-.51a.855.855 0 0 1 1.046 1.322c-1.348 1.65-2.888 2.837-5.2 2.187a1.174 1.174 0 0 0-.89.148c-1.02.488-2.063.795-3.204.448ZM69.268 84c.754-.83 1.809-1.234 2.715-1.844 2.116-1.424 4.268-2.788 6.118-4.565a.855.855 0 0 1 .633-.304c-.27.84-.14 1.725-.27 2.575-.347 2.302-1.795 3.734-3.917 4.457-1.769.601-3.584.852-5.28-.319Z"
                fill="#B0CED6"
                />
                <Path
                d="M55.913 89.013c0-1.685.065-1.736 1.618-2.197 2.793-.83 5.608-1.667 8.048-3.309 1.308-.876 2.157-.32 3.09.483-.086.108-.16.288-.27.307-2.31.459-3.801 2.484-6.066 3.093-2.133.574-4.252 1.192-6.42 1.623Z"
                fill="#EFF5F6"
                />
                <Path
                d="M84.79 27.05c.057.847.887 1.302 1.051 2.095-1.172-.27-2.081-1.019-3.03-1.682-.294-.205-.607-.567-.407-.96.229-.456.736-.227 1.127-.27.27.337.7.424 1.051.636l.213.205-.005-.024Z"
                fill="#D1E3E6"
                />
                <Path d="m84.795 27.064-.213-.205.213.205Z" fill="#B0CED6" />
                <Path
                d="M25.113 63.486c-.995-.58-1.76-1.442-2.642-2.157-.726-.593-1.435-1.151-2.397-1.283-.078 0-.132-.208-.197-.321.42.038.582-.194.725-.569a24.666 24.666 0 0 1 6.283-9.437 33.474 33.474 0 0 1 10.968-6.846c1.65-.631 3.292-1.297 5.05-1.6 1.098 1.72 2.815 2.837 4.163 4.315.72.787 1.696 1.434 1.939 2.594-1.47 1.396-2.945 2.78-5.217 1.701-.087-.04-.208 0-.31 0a16.024 16.024 0 0 0-9.082 2.427c-.951.593-2.043 1.208-2.335 2.489-2.081 1.016-2.769 2.364-2.402 4.656-1.957.847-3.527 2.13-4.546 4.032Z"
                fill="#D1E3E6"
                />
                <Path
                d="M49.005 48.184c-.243-1.159-1.219-1.806-1.939-2.593-1.348-1.47-3.065-2.586-4.163-4.315-.895-2.346.89-4.23 3.141-5.45 2.904-.792 4.765.877 6.237 2.926 2.521 3.506 3.893 7.55 4.883 11.722.569 2.397.418 4.886 1.006 7.28.048.205-.11.458-.176.69-.96.637-1.372-.186-1.828-.736-1.941-2.338-3.62-4.853-5.306-7.393-.518-.769-.922-1.694-1.855-2.13Zm6.808 5.639c.04-.246.092-.356.067-.445-.962-3.506-1.544-7.124-3.125-10.452-.668-1.404-1.121-2.9-2.4-3.958-1.277-1.057-3.442-1.095-4.373 0-.93 1.095-.722 3.368.489 4.258 1.504 1.11 2.68 2.529 3.774 3.996 1.273 1.69 2.395 3.505 3.605 5.233.2.286.337.863.788.69.636-.231.773.27 1.175.678Z"
                fill="#B0CED6"
                />
                <Path
                d="M39.97 27.897c-.41-.391-.04-.71.126-1.011a7.248 7.248 0 0 1 2.737-2.659c2.003-1.178 3.867-2.55 5.786-3.84a25.744 25.744 0 0 1 9.758-3.939c.909-.173 1.796.084 2.648.342.59.181.94.618.52 1.287-1.235.32-2.507.539-3.659 1.102-4.419 2.19-8.679 4.657-12.589 7.693-1.447 1.125-2.925 2.12-4.904 1.659l-.218-.219a.426.426 0 0 0-.205-.415Z"
                fill="#D1E3E6"
                />
                <Path
                d="M16.987 46.995a5.554 5.554 0 0 1-.917 3.085 1.588 1.588 0 0 1-1.51.776 1.466 1.466 0 0 1-1.273-1.078 5.487 5.487 0 0 1 .766-5.053c.71-1.014 1.958-.809 2.53.294.285.619.424 1.295.404 1.976Z"
                fill="#141514"
                />
                <Path
                d="M40.396 28.53c1.979.462 3.456-.539 4.904-1.658 3.907-3.036 8.167-5.503 12.587-7.703 1.15-.572 2.426-.782 3.658-1.103-.329.906-1.119 1.348-1.917 1.658-4.94 1.985-9.42 4.754-13.75 7.795-1.279.896-2.616 1.753-4.315 1.637-.48-.035-1.003.005-1.167-.625ZM39.97 27.897a.425.425 0 0 1 .224.429.482.482 0 0 1-.224-.43ZM40.175 28.312l.218.218-.218-.218Z"
                fill="#B0CED6"
                />
                <Path
                d="M49.005 48.184c.933.437 1.348 1.362 1.855 2.136 1.685 2.53 3.365 5.056 5.306 7.394.456.539.868 1.372 1.828.736 1.666-.025 2.316-1.287 2.877-2.51 1.092-2.379 1.408-4.919 1.316-7.521 0-.318-.205-.787.197-.936.331-.124.623.219.884.448 1.208 1.057 2.038 2.281 1.847 3.99-.039.242-.021.49.051.723.715 1.84.116 3.39-1.019 4.835-.084.148-.15.306-.197.47 1.3.21 2.58-.028 3.824.282 1.976.496 3.774 1.214 4.893 3.06.391.645.699 1.287.604 2.058-.086.704.138 1.375.21 2.065.294 2.748-1.334 4.4-3.35 5.795-2.018 1.394-4.41 1.968-6.833 2.313-1.079.154-2.122.348-3.195.022-.327-.1-.575.027-.666.448-.83 3.888-3.85 5.336-7.191 6.47a14.7 14.7 0 0 1-3.867.74c-2.904.15-5.732-.184-7.797-2.589-1.335-1.558-1.41-3.564-1.562-5.463-.064-.782-.229-.712-.741-.539a19.298 19.298 0 0 1-6.67.922c-1.08-.472-1.114-1.547-1.349-2.478-.056-.237.078-.54-.143-.763-1.658-1.723-2.593-4.044-4.497-5.56-.396-.315-.235-.863-.518-1.224 1.02-1.888 2.589-3.184 4.54-4.031.926 1.647 2.125 2.17 3.573 1.553 1.672-.712 2.697-2.785 2.182-4.47-.45-1.521-1.494-2.063-3.346-1.74.29-1.28 1.383-1.887 2.335-2.489a16.023 16.023 0 0 1 9.08-2.426c.103 0 .224-.035.31 0 2.284 1.057 3.76-.327 5.229-1.72Z"
                fill="#E4E6BE"
                />
                <Path
                d="M10.262 67.453a25.016 25.016 0 0 1-1.677-5.026c6.088.06 10.812 2.583 14.312 7.606 2.427 3.465 3.039 7.28 2.83 11.344-.037.736-.155 1.75-.808 2.014-.496.202-1.132-.623-1.707-.992-1.189-.763-1.887-2.157-3.319-2.594 0-.27 0-.574-.25-.76-2.317-1.729-3.964-4.12-6.073-6.054a.969.969 0 0 0-.178-.105c1.2-1.297 1.238-2.82.707-4.36-.31-.9-.785-1.828-1.85-2.09-.911-.226-1.496.34-1.987 1.017ZM22.6 75.094c.014-.965-.741-2.998-1.243-3.55-.854-.942-2.248-.877-2.817.131-.774 1.376-.33 4.11.852 5.223.97.917 2.135.766 2.76-.412.197-.447.347-.914.448-1.392Z"
                fill="#D1E3E6"
                />
                <Path
                d="M10.262 67.453c.49-.677 1.078-1.243 1.99-1.017 1.078.27 1.54 1.19 1.85 2.09.539 1.54.493 3.063-.707 4.36-1.079.364-2.065-.038-2.64-1.151-.698-1.36-.984-2.78-.493-4.282Z"
                fill="#B0CED6"
                />
                <Path
                d="M16.96 33.343h-.203l-.41-.03a10.36 10.36 0 0 0-1.39-3.418c-1.44-2.454-2.158-5.18-2.605-7.973-.162-.99-.45-1.963-.41-2.966.065-1.696 1.165-2.357 2.696-1.648 1.133.54 2.009 1.394 2.837 2.257a43.466 43.466 0 0 1 5.573 7.08.688.688 0 0 0-.556.233c-1.348 1.599-2.774 3.157-4.044 4.823-.461.599-1.319.812-1.488 1.642Z"
                fill="#EFF5F6"
                />
                <Path
                d="M16.96 33.343c.17-.83 1.027-1.043 1.485-1.642 1.273-1.666 2.697-3.235 4.045-4.823a.687.687 0 0 1 .555-.232c.836.622 1.195 1.599 1.78 2.405a.475.475 0 0 1-.238.774c-2.728.77-5.058 2.405-7.627 3.518ZM16.348 33.325l.41.03c-.151.196-.292.223-.41-.03Z"
                fill="#D1E3E6"
                />
                <Path
                d="M32.061 54.799c1.853-.324 2.896.218 3.346 1.739.502 1.685-.51 3.759-2.18 4.47-1.449.618-2.648.095-3.573-1.553-.362-2.292.326-3.64 2.407-4.656Z"
                fill="#141514"
                />
                <Path
                d="M55.813 53.823c-.402-.408-.54-.91-1.168-.664-.45.173-.587-.404-.787-.69-1.21-1.74-2.332-3.543-3.605-5.234-1.102-1.466-2.278-2.885-3.775-3.996-1.21-.89-1.431-3.136-.488-4.257.944-1.122 3.101-1.065 4.374 0 1.272 1.065 1.73 2.553 2.4 3.958 1.58 3.327 2.156 6.943 3.124 10.451.017.076-.035.186-.075.432Z"
                fill="#D1E3E6"
                />
                <Path
                d="M22.6 75.094a7.1 7.1 0 0 1-.447 1.392c-.626 1.178-1.79 1.33-2.761.412-1.181-1.113-1.618-3.847-.852-5.223.569-1.008 1.963-1.078 2.817-.132.502.553 1.257 2.586 1.243 3.551Z"
                fill="#B0CED6"
                />
            </Svg>
        </View>
        <View style={{marginTop: hp('7%'), flexDirection: 'row', marginLeft: wp('20%'), marginRight: wp('8%')}}>
            <Text style={{flexWrap: 'wrap', flexShrink:1}}>
            <Text style={styles.styleText1}>You have unlocked a mini game</Text>
            <Text style={styles.styleText2}>, go ahead and try it out to earn some rewards!</Text></Text>
        </View>
        <View style={{alignItems: 'center', marginTop: hp("2%")}}>
            <NeuButton 
                style={{marginTop: hp('10%'),}}
                color="#eef2f9"
                width={wp("65%")}
                height={hp("8%")}
                borderRadius={30}
                onPress = {() => {console.log("Enter screen name here");}}
            >
                <Text style = {styles.buttonText}>Got it!</Text>
            </NeuButton>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    styleText1: {
        fontSize: 24,
        lineHeight: 36,
        color: "#3C885E",
        // flexWrap: 'wrap',
        // flexShrink:1,
    },
    styleText2: {
        fontSize: 24,
        lineHeight: 36,
    },
    styleSvg: {
        marginRight: wp('10%')
    },
    heading: {
        fontSize: 24, 
        lineHeight: 36,
        flexWrap: 'wrap',
        flexShrink:1,
        marginTop: hp('2%'),
        marginLeft: wp('20%'),
    },
    centered: {
        backgroundColor: '#E3E3E3', 
        borderRadius : 30, 
        marginLeft: wp('7.5%'),
        marginTop: hp('4%'),    
        width : wp('85%'), 
        height : hp('35%'),
    },
    styleQuestions: {
        // marginTop: hp('1%'),
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
    },
    container: {
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
        // marginTop: 30,
    },
    buttonText: { 
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 33,

    },
    styleTitle: {
        // marginTop: hp('1.5%'),
        marginLeft: wp("7%"),
        lineHeight: 36,
        flexDirection: 'row'  
    },
    styleHeading: {
        color: '#3C885E',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        flexWrap: 'wrap',
        marginTop: hp('1%'),
        marginLeft: -wp('2%'),
        marginRight: wp('23%')
    },
    chapterTitle: {
        color: '#3C885E',
        fontSize: 24
    },
    inRow: {
        fontSize: 18,
        marginTop: hp('2.5%'),
        fontWeight: "700",
        lineHeight: 27,
        flexDirection: 'row'
    },
})

export default Greetings;
