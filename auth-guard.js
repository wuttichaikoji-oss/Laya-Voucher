import { auth, db } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

function hasAccess(role, allowedRoles = []) {
  return allowedRoles.includes(role);
}

async function logoutAndGoLogin(message = "") {
  if (message) alert(message);
  try { await signOut(auth); } catch {}
  window.location.href = "login.html";
}

export async function requireRole(allowedRoles = []) {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "login.html";
        return;
      }
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          await logoutAndGoLogin("ไม่พบบัญชีพนักงานในระบบ");
          return;
        }

        const profile = userSnap.data();

        if (!profile.active) {
          await logoutAndGoLogin("บัญชีนี้ถูกปิดการใช้งาน");
          return;
        }

        if (!hasAccess(profile.role, allowedRoles)) {
          alert("คุณไม่มีสิทธิ์เข้าหน้านี้");
          window.location.href = "dashboard.html";
          return;
        }

        resolve({ user, profile });
      } catch (err) {
        await logoutAndGoLogin("ตรวจสอบสิทธิ์ไม่สำเร็จ: " + err.message);
      }
    });
  });
}

export function renderNav(profile) {
  const nav = document.getElementById("navMenu");
  if (!nav) return;

  const links = [];
  if (["staff", "supervisor", "manager", "admin"].includes(profile.role)) {
    links.push(`<a href="issue.html">Issue</a>`);
    links.push(`<a href="search.html">Search</a>`);
    links.push(`<a href="redeem.html">Redeem</a>`);
    links.push(`<a href="voucher-detail.html">Voucher Detail</a>`);
  }

  if (["supervisor", "manager", "admin"].includes(profile.role)) {
    links.push(`<a href="dashboard.html">Dashboard</a>`);
  }

  if (profile.role === "admin") {
    links.push(`<a href="admin-users.html">Users</a>`);
  }

  links.push(`<button id="logoutBtn" type="button">Logout</button>`);
  nav.innerHTML = links.join(" ");

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "login.html";
    });
  }
}
