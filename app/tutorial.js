import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import { tutorialData } from "../data/tutorialData";

export default function TutorialPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const tutorialSections = tutorialData;
  const currentTutorial = tutorialSections[currentSection];

  const nextSection = () => {
    if (currentSection < tutorialSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["#ebf8ff", "#ffffff", "#f3e8ff"]} // from-blue-50 via-white to-purple-50
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 p-4 md:p-8"
      >
        <View className="max-w-4xl mx-auto">
          <View className="text-center mb-8">
            <Text style={styles.title}>Learn Hand & Foot</Text>
            <Text style={styles.subtitle}>
              Master the classic card game with our interactive tutorial
            </Text>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>
                {currentSection + 1} of {tutorialSections.length}
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${
                        ((currentSection + 1) / tutorialSections.length) * 100
                      }%`,
                    },
                  ]}
                />
              </View>
            </View>

            {/* Navigation Tabs */}
            <View style={styles.tabContainer}>
              {tutorialSections.map((section, index) => {
                const isActive = index === currentSection;
                const iconColor = isActive ? "white" : "black";
                return (
                  <TouchableOpacity
                    key={section.id}
                    style={[
                      styles.tabButton,
                      isActive && styles.tabButtonActive,
                    ]}
                    onPress={() => setCurrentSection(index)}
                  >
                    {section.icon({ color: iconColor })}
                    <Text style={[styles.tabText, { color: iconColor }]}>
                      {section.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Current Section Content */}
            <Card
              style={styles.card}
              className="shadow-xl mb-8"
              rounded-xl
              overflow-hidden
            >
              <LinearGradient
                colors={["#2563eb", "#9333ea"]} // from-blue-600 to-purple-600
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-t-lg p-4 overflow-hidden"
              >
                <View style={styles.cardHeader} className="mt-3">
                  {currentTutorial.icon({ color: "white" })}
                  <Text style={styles.cardTitle}>{currentTutorial.title}</Text>
                </View>
              </LinearGradient>
              <CardContent className="p-8">
                {currentTutorial.content()}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <View style={styles.navButtons}>
              <TouchableOpacity
                onPress={prevSection}
                disabled={currentSection === 0}
                style={[
                  styles.navButton,
                  currentSection === 0 && styles.disabled,
                ]}
              >
                <Feather name="chevron-left" size={20} color="#4B5563" />
                <Text>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={nextSection}
                disabled={currentSection === tutorialSections.length - 1}
                style={[
                  styles.navButton,
                  currentSection === tutorialSections.length - 1 &&
                    styles.disabled,
                ]}
              >
                <Text>Next</Text>
                <Feather name="chevron-right" size={20} color="#4B5563" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#D1D5DB",
    borderRadius: 3,
  },
  progressFill: {
    height: 6,
    backgroundColor: "#6366F1",
    borderRadius: 3,
  },
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  tabButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    margin: 4,
  },
  tabButtonActive: {
    backgroundColor: "#6366F1",
  },
  tabText: {
    marginLeft: 6,
    color: "#FFFFFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#FFFFFF",
  },
  cardContent: {
    fontSize: 16,
    color: "#4B5563",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },
  disabled: {
    opacity: 0.5,
  },
});
