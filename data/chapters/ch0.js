/**
 * Chapter 0: Foundation Bridge
 * Pre-Algebra fundamentals for 8th grade students
 * Designed to build confidence before Algebra 2
 */

window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch0"] = {
    "ch0-1": {
        title: "0.1 Number Sense & Fractions",
        subtitle: "The Building Blocks of All Math",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #38ef7d;">
                    <h3><i class="fas fa-puzzle-piece"></i> 왜 분수가 중요할까?</h3>
                    <p>분수는 단순히 "나누기"가 아닙니다. 분수는 <strong>비율</strong>, <strong>확률</strong>, <strong>비례</strong>의 언어입니다. "반값 세일 50% off"도 결국 $\\frac{1}{2}$입니다!</p>
                </div>

                <h2>I. 분수의 핵심 원리</h2>
                <div class="example-box glass">
                    <p><strong>분수 = 부분 ÷ 전체</strong></p>
                    <p>$\\frac{3}{4}$ = "4등분 중 3개" = 0.75 = 75%</p>
                </div>

                <div class="visual-analogy glass" style="text-align:center; padding:30px;">
                    <div style="display:flex; justify-content:center; gap:30px; flex-wrap:wrap;">
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-cyan); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem;">¼</div>
                            <p style="margin-top:10px;">$\\frac{1}{4}$ = 25%</p>
                        </div>
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-green); border-radius:50%; background:linear-gradient(180deg, var(--accent-green) 50%, transparent 50%); display:flex; align-items:center; justify-content:center; font-size:2rem;">½</div>
                            <p style="margin-top:10px;">$\\frac{1}{2}$ = 50%</p>
                        </div>
                        <div>
                            <div style="width:100px; height:100px; border:3px solid var(--accent-magenta); border-radius:50%; background:linear-gradient(180deg, var(--accent-magenta) 75%, transparent 75%); display:flex; align-items:center; justify-content:center; font-size:2rem;">¾</div>
                            <p style="margin-top:10px;">$\\frac{3}{4}$ = 75%</p>
                        </div>
                    </div>
                </div>

                <h2>II. 분수 연산 핵심 법칙</h2>
                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>연산</th><th>규칙</th><th>예시</th></tr>
                    <tr><td>덧셈/뺄셈</td><td>통분 필수!</td><td>$\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$</td></tr>
                    <tr><td>곱셈</td><td>분자×분자, 분모×분모</td><td>$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$</td></tr>
                    <tr><td>나눗셈</td><td>뒤집어서 곱하기!</td><td>$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$</td></tr>
                </table>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #ffd700; background:rgba(255,215,0,0.05);">
                    <h4><i class="fas fa-star" style="color:#ffd700;"></i> 성장 마인드셋</h4>
                    <p>"분수가 어렵게 느껴지는 건 당연해요! 하지만 분수를 마스터하면 대수학의 50%는 이미 정복한 거예요."</p>
                </div>
            </div>
        `
    },
    "ch0-2": {
        title: "0.2 PEMDAS: 연산 순서",
        subtitle: "컴퓨터처럼 정확하게 계산하기",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #00d2ff;">
                    <h3><i class="fas fa-sort-amount-down"></i> 왜 순서가 중요할까?</h3>
                    <p>$3 + 2 \\times 4 = ?$ 답이 20이라고 생각했다면... 틀렸어요! 정답은 <strong>11</strong>입니다.</p>
                    <p>곱셈이 덧셈보다 먼저 계산되기 때문이에요. 이 규칙을 <strong>PEMDAS</strong>라고 합니다.</p>
                </div>

                <h2>I. PEMDAS 완전 정복</h2>
                <div class="visual-dynamics glass" style="padding:25px; text-align:center; margin:20px 0;">
                    <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; font-size:1.5rem;">
                        <span style="background:var(--accent-magenta); padding:15px 25px; border-radius:15px;"><strong>P</strong>arentheses<br><small>괄호 ( )</small></span>
                        <span style="background:var(--accent-purple); padding:15px 25px; border-radius:15px;"><strong>E</strong>xponents<br><small>지수 $x^2$</small></span>
                        <span style="background:var(--accent-blue); padding:15px 25px; border-radius:15px;"><strong>M</strong>ultiply<br><small>곱셈 ×</small></span>
                        <span style="background:var(--accent-cyan); padding:15px 25px; border-radius:15px;"><strong>D</strong>ivide<br><small>나눗셈 ÷</small></span>
                        <span style="background:var(--accent-green); padding:15px 25px; border-radius:15px;"><strong>A</strong>dd<br><small>덧셈 +</small></span>
                        <span style="background:var(--accent-orange); padding:15px 25px; border-radius:15px;"><strong>S</strong>ubtract<br><small>뺄셈 -</small></span>
                    </div>
                </div>

                <div class="example-box glass" style="margin-top:20px;">
                    <h4>예제: $2 + 3 \\times (4^2 - 6) \\div 5$</h4>
                    <ol class="glass-list">
                        <li><strong>P</strong>: 괄호 먼저 → $(4^2 - 6)$ → $(16 - 6)$ → $10$</li>
                        <li><strong>M/D</strong>: 왼쪽→오른쪽 → $3 \\times 10 \\div 5$ → $30 \\div 5$ → $6$</li>
                        <li><strong>A</strong>: 덧셈 → $2 + 6$ → $\\boxed{8}$</li>
                    </ol>
                </div>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-code"></i> 코딩 연결</h4>
                    <p>Python이나 Java에서도 똑같은 규칙이 적용됩니다! <code>print(3 + 2 * 4)</code>의 결과는 11입니다. 컴퓨터도 PEMDAS를 따르죠.</p>
                </div>
            </div>
        `
    },
    "ch0-3": {
        title: "0.3 미지수와 방정식 기초",
        subtitle: "변수의 세계로 첫 발걸음",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #9d50bb;">
                    <h3><i class="fas fa-question-circle"></i> 미지수란?</h3>
                    <p>$x$는 "아직 모르는 숫자"를 대신하는 기호입니다. 마치 보물찾기에서 "X 표시"가 보물 위치를 나타내듯이, 수학에서 $x$는 우리가 찾아야 할 답을 나타냅니다.</p>
                </div>

                <h2>I. 방정식 풀이의 황금 규칙</h2>
                <div class="proof-box glass" style="border:1px solid var(--accent-purple); padding:25px;">
                    <h4 style="color:var(--accent-purple);">⚖️ 저울 원리</h4>
                    <p>방정식은 <strong>저울</strong>과 같습니다. 양쪽이 항상 같아야 하므로, 한쪽에 무언가를 하면 반드시 다른 쪽에도 똑같이 해야 합니다!</p>
                    <ul>
                        <li>양쪽에 같은 수를 <strong>더하거나 빼기</strong> ✓</li>
                        <li>양쪽에 같은 수를 <strong>곱하거나 나누기</strong> ✓ (0으로 나누는 것 제외!)</li>
                    </ul>
                </div>

                <div class="example-box glass" style="margin-top:20px;">
                    <h4>예제: $3x + 5 = 14$ 풀기</h4>
                    <table style="width:100%; border-collapse:collapse;">
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:10px;"><strong>Step 1:</strong></td>
                            <td>양쪽에서 5를 뺀다</td>
                            <td>$3x + 5 - 5 = 14 - 5$</td>
                            <td>→ $3x = 9$</td>
                        </tr>
                        <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
                            <td style="padding:10px;"><strong>Step 2:</strong></td>
                            <td>양쪽을 3으로 나눈다</td>
                            <td>$\\frac{3x}{3} = \\frac{9}{3}$</td>
                            <td>→ $x = 3$</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;"><strong>검산:</strong></td>
                            <td colspan="3">$3(3) + 5 = 9 + 5 = 14$ ✓</td>
                        </tr>
                    </table>
                </div>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #38ef7d; background:rgba(56,239,125,0.05);">
                    <h4><i class="fas fa-trophy" style="color:#38ef7d;"></i> 잘하고 있어요!</h4>
                    <p>방정식을 풀 수 있다는 건 "논리적 사고"를 할 수 있다는 뜻이에요. 이 능력은 코딩, 과학, 심지어 일상 문제 해결에도 쓰입니다!</p>
                </div>
            </div>
        `
    },
    "ch0-4": {
        title: "0.4 좌표평면과 그래프",
        subtitle: "수학을 눈으로 보기",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: #00d2ff;">
                    <h3><i class="fas fa-map-marker-alt"></i> 좌표의 마법</h3>
                    <p>좌표평면은 수학의 "지도"입니다. 모든 점은 $(x, y)$ 형태로 위치를 표현할 수 있어요. 이것이 GPS, 게임 캐릭터 위치, 그래프의 기초입니다!</p>
                </div>

                <h2>I. 좌표평면 이해하기</h2>
                <div class="visual-dynamics glass" style="padding:25px; text-align:center;">
                    <p>좌표 $(3, 2)$는 "오른쪽으로 3칸, 위로 2칸" 이동을 의미합니다.</p>
                    <div style="margin:20px auto; width:200px; height:200px; border:2px solid var(--accent-cyan); position:relative; background:rgba(0,210,255,0.05);">
                        <div style="position:absolute; left:50%; top:0; bottom:0; width:2px; background:rgba(255,255,255,0.3);"></div>
                        <div style="position:absolute; top:50%; left:0; right:0; height:2px; background:rgba(255,255,255,0.3);"></div>
                        <div style="position:absolute; left:75%; top:25%; width:12px; height:12px; background:var(--accent-magenta); border-radius:50%; transform:translate(-50%,-50%);"></div>
                        <span style="position:absolute; left:80%; top:20%; font-size:0.8rem;">(3, 2)</span>
                        <span style="position:absolute; right:-20px; top:47%; font-size:0.8rem;">x</span>
                        <span style="position:absolute; left:47%; top:-20px; font-size:0.8rem;">y</span>
                    </div>
                </div>

                <h2>II. 4개의 사분면</h2>
                <table class="glass-table" style="width:100%; margin-top:20px;">
                    <tr><th>사분면</th><th>x 부호</th><th>y 부호</th><th>예시</th></tr>
                    <tr><td>I (1사분면)</td><td>+</td><td>+</td><td>$(3, 4)$</td></tr>
                    <tr><td>II (2사분면)</td><td>−</td><td>+</td><td>$(-2, 5)$</td></tr>
                    <tr><td>III (3사분면)</td><td>−</td><td>−</td><td>$(-3, -1)$</td></tr>
                    <tr><td>IV (4사분면)</td><td>+</td><td>−</td><td>$(4, -2)$</td></tr>
                </table>

                <div class="tj-edge glass" style="margin-top:20px;">
                    <h4><i class="fas fa-gamepad"></i> 게임 연결</h4>
                    <p>마인크래프트에서 F3을 누르면 나오는 좌표가 바로 이 원리입니다! $(x, y, z)$로 3D 세계의 위치를 표현하죠. 수학이 게임을 만든답니다.</p>
                </div>
            </div>
        `
    },
    "ch0-rev": {
        title: "Chapter 0 복습 도전",
        subtitle: "기초 마스터 확인",
        difficulty: "basic",
        content: `
            <div class="lesson-section">
                <h2>I. 한눈에 보는 기초</h2>
                <p>이 챕터에서 배운 것들은 앞으로 배울 모든 수학의 <strong>기초 체력</strong>입니다.</p>
                
                <div class="summary-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-cyan);"><i class="fas fa-pizza-slice"></i> 분수</h4>
                        <p style="font-size:0.85rem;">부분/전체, 통분, 뒤집어 곱하기</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-purple);"><i class="fas fa-list-ol"></i> PEMDAS</h4>
                        <p style="font-size:0.85rem;">괄호 → 지수 → 곱/나눗셈 → 덧/뺄셈</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-green);"><i class="fas fa-balance-scale"></i> 방정식</h4>
                        <p style="font-size:0.85rem;">저울 원리, 양쪽에 같은 연산</p>
                    </div>
                    <div class="glass-card" style="padding:15px;">
                        <h4 style="color:var(--accent-magenta);"><i class="fas fa-crosshairs"></i> 좌표</h4>
                        <p style="font-size:0.85rem;">$(x, y)$, 4개 사분면</p>
                    </div>
                </div>

                <div class="encouragement-box glass" style="margin-top:25px; padding:20px; border-left:4px solid #ffd700; background:rgba(255,215,0,0.05);">
                    <h4><i class="fas fa-rocket" style="color:#ffd700;"></i> 준비 완료!</h4>
                    <p>이 기초들을 익혔다면, 이제 <strong>Algebra 2</strong>의 세계로 들어갈 준비가 되었어요! 어려워도 괜찮아요. 천천히, 하나씩 정복해 나가면 됩니다.</p>
                </div>
            </div>
        `
    }
};
