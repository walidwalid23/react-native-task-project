import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/Card";
import Favourite from "./components/Favourite";
import Goal from "./components/Goal";
import IconTextButton from "./components/IconTextButton";
import SectionHeader from "./components/SectionHeader";
import Wallet from "./components/Wallet";
import { colors, fontSizes, margins, paddings, sizes } from "./styles";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkLoggedState = async () => {
      const isLoggedIn = await AsyncStorage.getItem("loggedIn");

      if (!isLoggedIn) {
        router.replace("/login");
      }
    };
    checkLoggedState();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.blackColor,
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginTop: margins.xSmallMargin,
              marginRight: margins.mediumMargin,
              marginLeft: margins.mediumMargin,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../assets/images/appbar_logo.png")}
                style={{ width: 71, height: 32 }}
              />

              <Pressable>
                <Image
                  source={require("../assets/images/SettingsIcon.png")}
                  style={{ width: sizes.xLargeSize, height: sizes.xLargeSize }}
                />
              </Pressable>
            </View>
            <View style={{ height: margins.largeMargin }} />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: sizes.xLargeSize, height: sizes.xLargeSize }}
              />
              <View style={{ width: margins.xxSmallMargin }} />
              <Text
                style={{
                  color: colors.titleTextColor,
                  fontWeight: "bold",
                  fontSize: fontSizes.largeFont,
                }}
              >
                Morning Izzy,
              </Text>
              <View style={{ width: 32 }} />
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#D6D3FF",
                  borderRadius: 2,
                  height: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={async () => {
                  await AsyncStorage.removeItem("loggedIn");
                  router.replace("/login");
                  console.log("logged out");
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "White" }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: margins.largeMargin }} />
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome6
                      name="money-check-dollar"
                      size={sizes.xSmallSize}
                      color="white"
                    />
                    <View style={{ width: margins.xxxxSmallMargin }} />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: fontSizes.smallFont,
                        color: "white",
                      }}
                    >
                      USD
                    </Text>
                    <View style={{ width: margins.smallMargin }} />
                  </View>
                  <View style={{ height: margins.xxxSmallMargin }} />
                  <View
                    style={{
                      backgroundColor: colors.selectedColor,
                      height: 1,
                      width: "120%",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="btc"
                      size={sizes.xSmallSize}
                      color={colors.lightGreyColor}
                    />
                    <View style={{ width: margins.xxxxSmallMargin }} />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: fontSizes.smallFont,
                        color: colors.lightGreyColor,
                      }}
                    >
                      BTC
                    </Text>
                  </View>
                  <View style={{ height: margins.xxxSmallMargin }} />
                  <View
                    style={{
                      backgroundColor: colors.lightGreyColor,
                      height: 1,
                      width: "140%",
                    }}
                  />
                </View>
              </View>
              <View style={{ height: margins.xxSmallMargin }} />
              <Text
                style={{
                  fontSize: fontSizes.veryLargeFont,
                  color: colors.titleTextColor,
                }}
              >
                $41,520
              </Text>
              <View style={{ height: margins.xxSmallMargin }} />
              <TouchableOpacity
                style={{
                  backgroundColor: colors.purpleColor,
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 2222,
                  padding: paddings.xxxSmallPadding,
                  paddingLeft: paddings.xxSmallPadding,
                  paddingRight: paddings.xxSmallPadding,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="eye" size={sizes.smallSize} color="white" />
                  <View style={{ width: margins.xxxSmallMargin }} />
                  <Text
                    style={{
                      fontSize: fontSizes.xxSmallFont,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Show
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: margins.xLargeMargin }} />
          <View
            style={{
              flexDirection: "column",
              backgroundColor: colors.darkGreyColor, // fill color
              borderTopLeftRadius: sizes.mediumSize,
              borderTopRightRadius: sizes.mediumSize,
              paddingVertical: paddings.mediumPadding,
              paddingHorizontal: paddings.largePadding,
            }}
          >
            <SectionHeader
              title="Goals"
              hasIncrease={true}
              buttonIconName="plus-circle"
              buttonText="Create New"
            />
            <View style={{ height: margins.mediumMargin }} />
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Goal
                goalImage={require("../assets/images/coin-in-hand 1.png")}
                text="Solar Trip"
                amount={420.02}
                percentage={1}
              />
              <View style={{ width: margins.mediumMargin }} />
              <Goal
                goalImage={require("../assets/images/Saly-21.png")}
                text="DP"
                amount={1520.4}
                percentage={0.1}
              />
            </View>
            <View style={{ height: margins.mediumMargin }} />
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Goal
                goalImage={require("../assets/images/Saly-42.png")}
                text="Gifts"
                amount={20.12}
                percentage={4}
              />
              <View style={{ width: margins.mediumMargin }} />
              <Goal
                goalImage={require("../assets/images/Saly-5.png")}
                text="Marathon"
                amount={32.0}
                percentage={1.5}
              />
            </View>
            <View style={{ height: margins.mediumMargin }} />
            <TouchableOpacity
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: colors.mediumGreyColor,
                borderRadius: 2222,
                padding: paddings.xxxSmallPadding,
                paddingLeft: paddings.xxSmallPadding,
                paddingRight: paddings.xxSmallPadding,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: fontSizes.xSmallFont,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
            <View style={{ height: margins.xLargeMargin }} />
            <SectionHeader
              title="Cards"
              hasIncrease={false}
              buttonIconName="gear"
              buttonText="Manage"
            />
            <View style={{ height: margins.mediumMargin }} />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Card name="Debit" title="Wave Simple" isActive={true} />
              <View style={{ width: margins.xSmallMargin }} />
              <Card name="Credit" title="Wave Fluro" isActive={false} />
            </View>
            <View style={{ height: margins.mediumMargin }} />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="exit-outline"
                    size={sizes.smallSize}
                    color="white"
                  />
                  <View style={{ width: margins.xxSmallMargin }} />
                  <Text
                    style={{ fontSize: fontSizes.mediumFont, color: "white" }}
                  >
                    ${328.88}
                  </Text>
                </View>
                <View style={{ height: margins.xSmallMargin }} />
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="planet"
                    size={sizes.smallSize}
                    color="white"
                  />
                  <View style={{ width: margins.xxSmallMargin }} />
                  <Text
                    style={{
                      fontSize: fontSizes.smallFont,
                      color: colors.lightGreyColor,
                    }}
                  >
                    {"Main Savings"}
                  </Text>
                </View>
                <View style={{ height: margins.xSmallMargin }} />
                <IconTextButton
                  buttonIconName="gear"
                  iconSize={sizes.xxSmallSize}
                  text="Options"
                />
              </View>
              <View style={{ width: margins.xSmallMargin }} />
              <Image
                source={require("../assets/images/Frame 36.png")}
                style={{ width: 173.04, height: 211.53 }}
              />
            </View>
            <View style={{ height: margins.largeMargin }} />
            <SectionHeader
              title="Favourites"
              hasIncrease={false}
              buttonIconName="gear"
              buttonText="Manage"
            />
            <View style={{ height: margins.mediumMargin }} />
            <Favourite
              title="Buy to"
              subtitle="BTC Account"
              middleComponent={
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: fontSizes.mediumFont,
                    color: "white",
                  }}
                >
                  ${100}
                </Text>
              }
              largeImage={require("../assets/images/circle_avatar_big.png")}
              smallImage={require("../assets/images/circle_avatar_small.png")}
            />
            <View style={{ height: margins.mediumMargin }} />
            <Favourite
              title="Transfer to"
              subtitle="Michael Scott"
              middleComponent={
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: fontSizes.mediumFont,
                    color: "white",
                  }}
                >
                  ${400}
                </Text>
              }
              largeImage={require("../assets/images/avatar2.png")}
              smallImage={require("../assets/images/circle_avatar_small.png")}
            />
            <View style={{ height: margins.mediumMargin }} />
            <Favourite
              title="Pay bills to"
              subtitle="Gas"
              middleComponent={
                <TouchableOpacity
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: colors.mediumGreyColor,
                    borderRadius: 2222,
                    padding: paddings.xxxSmallPadding,
                    paddingLeft: paddings.xxSmallPadding,
                    paddingRight: paddings.xxSmallPadding,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: fontSizes.smallFont,
                      color: "white",
                    }}
                  >
                    Check Amount
                  </Text>
                </TouchableOpacity>
              }
              largeImage={require("../assets/images/circle_avatar_big.png")}
              smallImage={require("../assets/images/bolt.png")}
            />
            <View style={{ height: margins.mediumMargin }} />
            <IconTextButton
              buttonIconName="arrow-down"
              iconSize={sizes.xxSmallSize}
              text="Show All"
            />
            <View style={{ height: margins.xLargeMargin }} />
            <SectionHeader
              title="Wallets"
              hasIncrease={true}
              buttonIconName="gear"
              buttonText="Manage"
            />
            <View style={{ height: margins.mediumMargin }} />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Wallet
                iconImage={require("../assets/images/paypal.png")}
                title="Paypal"
                amount="$400.20"
              />
              <View style={{ width: margins.smallMargin }} />
              <Wallet
                iconImage={require("../assets/images/circle_avatar_small.png")}
                title="Bitcoin"
                amount="BTC0.01422925"
              />
              <View style={{ width: margins.smallMargin }} />
              <Wallet
                iconImage={require("../assets/images/alipay.png")}
                title="Alipay"
                amount="$20.69"
              />
            </View>
            <View style={{ height: margins.largeMargin }} />
            <IconTextButton
              buttonIconName="arrows-v"
              iconSize={sizes.smallSize}
              text="Manage Homepage"
            />
            <View style={{ height: margins.mediumMargin }} />
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black",
            paddingVertical: 12,
            borderTopWidth: 0.5,
            borderTopColor: "#444",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Entypo
              name="home"
              size={sizes.mediumSize}
              color={colors.selectedColor}
            />
            <Text
              style={{
                color: colors.selectedLabelColor,
                fontSize: fontSizes.xxSmallFont,
                fontWeight: "bold",
              }}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome
              name="money"
              size={sizes.mediumSize}
              color={colors.unSelectedItemColor}
            />
            <Text
              style={{
                color: colors.unSelectedItemColor,
                fontSize: fontSizes.xxSmallFont,
                fontWeight: "bold",
              }}
            >
              Savings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome
              name="arrow-circle-o-up"
              size={sizes.mediumSize}
              color={colors.unSelectedItemColor}
            />
            <Text
              style={{
                color: colors.unSelectedItemColor,
                fontSize: fontSizes.xxSmallFont,
                fontWeight: "bold",
              }}
            >
              Transact
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome
              name="bitcoin"
              size={sizes.mediumSize}
              color={colors.unSelectedItemColor}
            />
            <Text
              style={{
                color: colors.unSelectedItemColor,
                fontSize: fontSizes.xxSmallFont,
                fontWeight: "bold",
              }}
            >
              Bitcoin
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
