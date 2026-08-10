const uniqueEmail = `testuser_${Date.now()}@codeplace.ai`;
const testUser = {
  name: "Automation Test User",
  email: uniqueEmail,
  password: "securePassword123"
};

async function runTests() {
  console.log("=== STARTING AUTH API TESTS ===");
  console.log(`Using email: ${uniqueEmail}`);

  // Test 1: Signup
  console.log("\n--- Testing Signup API Route (/api/auth/signup) ---");
  const signupResponse = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testUser)
  });

  const signupData = await signupResponse.json();
  if (signupResponse.status === 200 && signupData.success) {
    console.log("SUCCESS: Signup succeeded!");
    console.log("Created profile ID:", signupData.user.id);
  } else {
    console.log("FAILURE: Signup failed!", signupData);
    process.exit(1);
  }

  const userId = signupData.user.id;

  // Test 2: Login
  console.log("\n--- Testing Login API Route (/api/auth/login) ---");
  const loginResponse = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: testUser.email,
      password: testUser.password
    })
  });

  const loginData = await loginResponse.json();
  if (loginResponse.status === 200 && loginData.success) {
    console.log("SUCCESS: Login succeeded!");
    console.log("User rating:", loginData.user.rating);
  } else {
    console.log("FAILURE: Login failed!", loginData);
    process.exit(1);
  }

  // Test 3: Update Profile
  console.log("\n--- Testing Profile Update API Route (/api/auth/update) ---");
  const updatedProfile = {
    ...loginData.user,
    xp: 500,
    level: 2,
    coins: 200,
    solvedProblems: ["1", "2", "3"]
  };

  const updateResponse = await fetch("http://localhost:3000/api/auth/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProfile)
  });

  const updateData = await updateResponse.json();
  if (updateResponse.status === 200 && updateData.success) {
    console.log("SUCCESS: Profile update synced to DB!");
  } else {
    console.log("FAILURE: Profile update failed!", updateData);
    process.exit(1);
  }

  // Test 4: Verify Social Login
  console.log("\n--- Testing Social Login API Route (/api/auth/social-login) ---");
  const socialUser = {
    email: `social_${Date.now()}@codeplace.ai`,
    name: "Social Tester",
    provider: "GitHub"
  };

  const socialResponse = await fetch("http://localhost:3000/api/auth/social-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(socialUser)
  });

  const socialData = await socialResponse.json();
  if (socialResponse.status === 200 && socialData.success) {
    console.log("SUCCESS: Social Login succeeded!");
    console.log("Created social profile ID:", socialData.user.id);
    console.log("Social Avatar icon:", socialData.user.avatar);
  } else {
    console.log("FAILURE: Social Login failed!", socialData);
    process.exit(1);
  }

  console.log("\n=== ALL TESTS PASSED SUCCESSFULLY ===");
}

runTests().catch(console.error);
