import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
import { useState, useEffect } from 'react';

export function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <View style={tw`fixed bottom-24 left-4 right-4 bg-surface-container-highest border border-outline-variant/30 p-4 rounded-2xl shadow-xl z-50 flex items-center justify-between animate-in slide-in-from-bottom-5">
      <View style={tw`flex items-center gap-3">
        <View style={tw`w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
          <Text style={tw`material-symbols-outlined">add_to_home_screen</Text>
        </View>
        <View>
          <Text style={tw`font-headline font-bold text-sm text-on-surface">Install App</Text>
          <Text style={tw`text-xs text-on-surface-variant">Add to home screen for a better experience</Text>
        </View>
      </View>
      <View style={tw`flex gap-2">
        <TouchableOpacity 
          onPress={() => setShowPrompt(false)}
          style={tw`p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors"
        >
          <Text style={tw`material-symbols-outlined text-sm">close</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleInstallClick}
          style={tw`bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform"
        ><Text style={tw`text-center font-bold`}>Install</Text></TouchableOpacity>
      </View>
    </View>
  );
}
