import React, {useEffect, useState} from "react";
import axios from "axios";
import {ProfileInformationCard} from "../components/ProfileInformationCard";
import {ChangePasswordCard} from "../components/ChangePasswordCard";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
  });
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoadingProfile(true);
      const response = await axios.get("/api/profile");
      setProfile({
        fullName: response.data.fullName,
        email: response.data.email,
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleSaveProfile = async (updatedProfile) => {
    try {
      setSavingProfile(true);
      await axios.put("/api/profile", updatedProfile);
      setProfile(updatedProfile); // Update local state
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setSavingProfile(false);
    }
  };

  const handleChangePassword = async (passwordData) => {
    try {
      setChangingPassword(true);
      await axios.post("/api/change-password", passwordData);
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password.");
    } finally {
      setChangingPassword(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">User Profile</h1>
        <p className="text-gray-500">View and manage your account details.</p>
        <hr className="mt-4 border-gray-300" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Info */}
        <ProfileInformationCard
          profile={profile}
          setProfile={setProfile}
          onSave={handleSaveProfile}
          saving={savingProfile}
          loading={loadingProfile}
        />
        {/* Change Password */}
        <ChangePasswordCard
          onChangePassword={handleChangePassword}
          changing={changingPassword}
        />
      </div>
    </div>
  );
}
