import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Path, Ellipse } from "react-native-svg"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const SvgRender = ({
    params,
}) => (
    <View>
        <View style = {styles.alignmentCross}>
            <Svg
                width={27}
                height={27}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <Path
            d="m16.07 6.766-.466.183.184.465.465-.183-.183-.465Zm-1.21-3.071-.465.183.465-.183ZM5.556 7.36l-.466.183.466-.183Zm1.21 3.071.183.465.465-.183-.183-.465-.466.183Zm3.665 9.304.465-.183-.184-.465-.465.183.184.465Zm1.21 3.072.465-.183-.466.183Zm9.304-3.665-.466.183.466-.183Zm-1.21-3.072-.184-.465-.465.183.183.465.466-.183ZM25.16 8.56a4.5 4.5 0 0 1-2.538 5.836l.367.93a5.5 5.5 0 0 0 3.101-7.133l-.93.367ZM19.324 6.02a4.5 4.5 0 0 1 5.837 2.538l.93-.367a5.5 5.5 0 0 0-7.133-3.101l.367.93Zm-3.071 1.21 3.072-1.21-.367-.93-3.072 1.21.367.93Zm-1.858-3.353 1.21 3.071.93-.366-1.21-3.072-.93.367ZM8.558 1.34a4.5 4.5 0 0 1 5.837 2.538l.93-.367A5.5 5.5 0 0 0 8.192.41l.366.93ZM6.021 7.176A4.5 4.5 0 0 1 8.558 1.34L8.192.41A5.5 5.5 0 0 0 5.09 7.543l.93-.367Zm1.21 3.072L6.02 7.176l-.93.367 1.21 3.071.93-.366Zm-3.354 1.858 3.072-1.21-.367-.93-3.071 1.21.366.93ZM1.34 17.942a4.5 4.5 0 0 1 2.537-5.836l-.366-.93a5.5 5.5 0 0 0-3.102 7.133l.93-.367Zm5.836 2.538a4.5 4.5 0 0 1-5.836-2.538l-.93.367a5.5 5.5 0 0 0 7.132 3.101l-.366-.93Zm3.071-1.21-3.071 1.21.366.93 3.072-1.21-.367-.93Zm1.859 3.354-1.21-3.072-.93.367 1.21 3.071.93-.366Zm5.836 2.537a4.5 4.5 0 0 1-5.836-2.538l-.93.367a5.5 5.5 0 0 0 7.132 3.102l-.366-.93Zm2.537-5.836a4.5 4.5 0 0 1-2.537 5.836l.366.93a5.5 5.5 0 0 0 3.102-7.133l-.93.367Zm-1.21-3.072 1.21 3.072.93-.367-1.21-3.071-.93.366Zm3.354-1.858-3.072 1.21.367.93 3.072-1.21-.367-.93Z"
            fill="#000"
            fillOpacity={0.8}
            />
            </Svg>
        </View>
        <View style = {styles.alignmentEllipse}>
            <Svg
                width={14}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Ellipse
                cx={7.19}
                cy={7.215}
                rx={6.5}
                ry={7}
                transform="rotate(10.39 7.19 7.215)"
                fill="#343434"
                fillOpacity={0.49}
                />
            </Svg>
        </View>
    </View>
);

const styles = StyleSheet.create({
    alignmentCross: {
        marginLeft: wp("17%"),
        marginTop: hp("3%")
    },
    alignmentEllipse: {
        marginLeft: wp("26%"),
        marginTop: -hp("1%")
    }
});

export default SvgRender;
