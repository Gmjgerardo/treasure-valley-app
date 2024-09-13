import { useRef } from "react";
import { Animated } from "react-native";
import { Tabs, useFocusEffect } from "expo-router";
import Icon from "../../src/components/icon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "#AFAFAF",
        tabBarStyle: {
          paddingHorizontal: 30,
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              name="home"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              name="heart"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrito",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              name="bag"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificaciones",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              name="bell"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const TabBarIcon = ({ size, color, name, focused }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    if (focused) {
      animatedWidth.setValue(0);

      Animated.timing(animatedWidth, {
        toValue: 12,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  });

  return (
    <>
      <Icon
        name={focused ? name : `${name}-o`}
        size={size}
        color={color}
        style={{ marginBottom: 7 }}
      />
      {focused && (
        <Animated.View
          style={{
            width: animatedWidth,
            backgroundColor: color,
            height: 5,
            borderRadius: 5,
          }}
        />
      )}
    </>
  );
};
