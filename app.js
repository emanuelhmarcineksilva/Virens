const agencies = {
  bangkok: {
    name: "Bangkok",
    intro: "Operação compacta: o investimento em infraestrutura precisa caber no retorno de uma demanda pequena.",
    profile: [
      ["Frota", "80 veículos"],
      ["Contratos (4 semanas)", "271"],
      ["Vagas elétricas", "6"],
      ["Entrada e horário", "B3 45 · Seg–Sáb"]
    ],
    issues: [
      ["Obra pode custar mais que o ganho", "O teto de atendimento é de aproximadamente 4.065 pontos."],
      ["Fila parada no fim de semana", "A agência fecha sábado às 12h e reabre segunda às 08h."],
      ["Recarga na ponta com a agência fechada", "84 kWh na ponta foram penalizados na configuração avaliada."]
    ],
    constraintsIntro: "Segunda concentra as retiradas e a capacidade de recarga precisa atravessar a pausa do fim de semana.",
    constraints: [["Pico de segunda", "85 retiradas", 82], ["Fechamento semanal", "44 h sem atendimento", 92], ["Devoluções abaixo de 30% SOC", "41–43%", 43]],
    metrics: [
      ["NOTA PÚBLICA", "2.850", "1 perda em 271 contratos"],
      ["CARREGADORES", "4 × AC 7", "Sem DC: obra não se paga"],
      ["PONTA EVITADA", "301 kWh", "+151 pontos"],
      ["ENTRADA", "B3 45", "40,5 kW disponíveis"]
    ],
    health: [["100%", "Atendimento potencial", "Com recarga ilimitada"], ["99,6%", "Atendimento recomendado", "1 cliente perdido"]],
    healthTitle: "Investimento proporcional ao porte",
    healthCopy: "A configuração mantém apenas AC 7 kW e evita a obra de entrada e os carregadores DC.",
    summary: "Proteja o atendimento com investimento enxuto e evite pagar por infraestrutura que não se recupera.",
    decisions: [
      ["Retirar os 2 DC 30 kW", "Custo de obra superior ao ganho máximo de atendimento (~4.065 pontos).", "+7.000 pontos, mantendo 1 perda em 271 contratos."],
      ["Manter 4 AC 7 kW", "As perdas crescem nas semanas ocultas; a fila fica parada por 44 horas no fim de semana.", "O quarto carregador é um seguro operacional: a nota esperada sobe de 1.540 para 1.638."],
      ["Evitar a ponta", "A recarga continuaria na ponta (18h–21h), mesmo com a agência fechada.", "+151 pontos e 301 kWh fora da ponta, sem novas perdas."],
      ["Manter a entrada B3 45", "O pico observado foi de 28 kW, abaixo dos 40,5 kW disponíveis.", "Evita 5.000 pontos de obra de entrada."]
    ],
    risk: "A melhor opção testada no juiz foi −4.150. O plano recomendado alcança 2.850 na janela pública e 1.638 estimados nas semanas ocultas."
  },
  vienna: {
    name: "Vienna",
    intro: "A infraestrutura já instalada supera a demanda. O foco é reduzir custos sem limitar o atendimento.",
    profile: [
      ["Frota", "300 veículos"],
      ["Contratos (4 semanas)", "864"],
      ["Vagas elétricas", "30"],
      ["Entrada e horário", "A4 150 · Aberta 24 h"]
    ],
    issues: [
      ["Demanda contratada acima do necessário", "A cobrança é de 2 pontos por kW."],
      ["Recarga na ponta é evitável", "A operação contínua permite recuperar a carga durante a noite."],
      ["Excesso de carregadores não traz ganho", "A infraestrutura disponível já é suficiente para o volume."]
    ],
    constraintsIntro: "A operação é estável e distribuída; o principal ajuste é econômico, não de capacidade.",
    constraints: [["Retiradas diárias", "109–149", 46], ["Demanda recomendada", "30 kW", 24], ["Devoluções abaixo de 30% SOC", "~50%", 50]],
    metrics: [
      ["NOTA PÚBLICA", "11.900", "0 perdas · 0 upgrades"],
      ["DEMANDA", "30 kW", "Reduz custo contratado"],
      ["PONTA EVITADA", "1.372 kWh", "+686 pontos"],
      ["ENTRADA", "A4 150", "135 kW úteis instalados"]
    ],
    health: [["100%", "Atendimento", "Zero clientes perdidos"], ["100%", "Continuidade", "Operação aberta 24 horas"]],
    healthTitle: "Operação próxima do teto de eficiência",
    healthCopy: "A nota está próxima do máximo de 12.960 pontos, com demanda e recarga na ponta otimizadas.",
    summary: "Reduza a demanda contratada e pause a recarga na ponta; mantenha a infraestrutura já instalada.",
    decisions: [
      ["Contratar 30 kW (não 130)", "A demanda custa 2 pontos por kW. Com 20 kW, a operação quebra: 111 perdas e nota −13.191.", "+200 pontos mantendo folga suficiente para a demanda observada."],
      ["Manter somente 4 AC 7 kW", "Há 30 vagas e infraestrutura sobrando para o volume de retiradas.", "Cada AC adicional custa 250 pontos sem ganho; com 3, seriam 108 perdas."],
      ["Evitar a ponta", "A agência fica aberta e pode parar a recarga entre 18h e 21h.", "+686 pontos ao deslocar 1.372 kWh, sem novas perdas."],
      ["Manter a entrada A4 150", "A potência já instalada tem folga para a operação.", "Evita custo de obra de entrada; não há necessidade de upgrade."]
    ],
    risk: "Robusta nos testes: os eventos avaliados não geraram perdas. A nota pública de 11.900 está próxima do teto de 12.960."
  },
  hanoi: {
    name: "Hanoi",
    intro: "Alto volume, 305 veículos e apenas 6 vagas: potência e velocidade nos picos são determinantes.",
    profile: [
      ["Frota", "305 veículos"],
      ["Contratos (4 semanas)", "1.167"],
      ["Vagas elétricas", "6"],
      ["Entrada e horário", "B3 75 · Seg–Dom"]
    ],
    issues: [
      ["Entrada antiga limitava a recarga", "Com B3 45, a simulação perdia 251 clientes em quatro semanas."],
      ["Picos de segunda e sexta", "As janelas críticas se concentram entre 16h e 19h."],
      ["Recarga DC necessária em poucas vagas", "Cada devolução com baixa bateria exige horas de carregamento."]
    ],
    constraintsIntro: "As poucas vagas precisam de mais potência para absorver os picos e o alto percentual de devoluções com pouca carga.",
    constraints: [["Pico de segunda-feira", "234 retiradas", 88], ["Pico de sexta-feira", "217 retiradas", 82], ["Devoluções abaixo de 30% SOC", "44–50%", 48]],
    metrics: [
      ["NOTA PÚBLICA", "6.201", "1 perda · 13 upgrades"],
      ["CARREGADORES", "5 AC + 1 DC", "Ocupação das 6 vagas"],
      ["ENTRADA", "B3 75", "Upgrade reduz 250 perdas"],
      ["PONTA", "2.497 kWh", "Custo aproximado: 1.250 pontos"]
    ],
    health: [["99,9%", "Atendimento", "1 perda em 1.167 contratos"], ["96%", "Robustez", "5.964 pontos com eventos"]],
    healthTitle: "A capacidade foi ajustada ao gargalo real",
    healthCopy: "O upgrade de entrada e a combinação de AC com DC derrubam as perdas de 251 para 1.",
    summary: "Aumente a entrada para B3 75, use um DC nas seis vagas e priorize as próximas reservas.",
    decisions: [
      ["Subir entrada de B3 45 para B3 75", "40,5 kW eram insuficientes para 305 veículos e muitas devoluções com bateria baixa.", "Perdas caem de 251 para 1: +50.422 pontos, mesmo com 5.000 de obra."],
      ["Instalar 1 DC 30 kW", "Seis vagas e picos de segunda e sexta entre 16h e 19h exigem recarga rápida.", "Perdas caem de 300 para 1: +62.583 pontos."],
      ["Ocupar as seis vagas com 5 AC 7 kW", "Fila longa nos picos e alta demanda por recarga simultânea.", "Sem o quinto AC, seriam 35 perdas: +7.550 pontos."],
      ["Priorizar a próxima retirada", "As perdas nos picos atingem categorias Ouro e Diamante.", "Contra chegada: +1.077 pontos; contra menor SOC: +4.909."],
      ["Aceitar recarga na ponta", "A agência fica aberta até 20h e precisa carregar no fim da tarde.", "2.497 kWh na ponta evitam 20 perdas: +3.234 pontos."]
    ],
    risk: "Nota esperada de 5.964 com eventos e 5.259 no pior cenário oculto. A principal fragilidade é volume +10%, bateria ×0,8 ou DC indisponível."
  },
  zurich: {
    name: "Zurich",
    intro: "A segunda-feira concentra a demanda da semana e há somente 4 vagas elétricas para 255 veículos.",
    profile: [
      ["Frota", "255 veículos"],
      ["Contratos (4 semanas)", "867"],
      ["Vagas elétricas", "4"],
      ["Entrada e horário", "B3 75 · Seg–Sáb"]
    ],
    issues: [
      ["Capacidade insuficiente na segunda", "São 298 retiradas na segunda, contra cerca de 100 nos demais dias."],
      ["Fila acumula durante o fechamento", "A operação fica parada por aproximadamente 42 h no fim de semana."],
      ["Configuração de referência perde 74 clientes", "Todas as perdas são por falta de recarga, não por falta de carros."]
    ],
    constraintsIntro: "Poucas vagas, fila acumulada e pico extremo na segunda-feira pedem mais potência por ponto.",
    constraints: [["Retiradas na segunda", "298 veículos", 96], ["Fechamento semanal", "42 h sem atendimento", 86], ["Devoluções abaixo de 30% SOC", "41–49%", 45]],
    metrics: [
      ["NOTA PÚBLICA", "2.341", "9 perdas · 21 upgrades"],
      ["CARREGADORES", "2 AC + 2 DC", "Aproveita as 4 vagas"],
      ["PONTA", "2.164 kWh", "Evita 11 perdas"],
      ["NOTA OCULTA", "−5.733", "Maior risco entre as agências"]
    ],
    health: [["99%", "Atendimento", "9 perdas em 867 contratos"], ["RISCO ALTO", "Robustez", "Nota oculta −5.733 ± 6.183"]],
    healthTitle: "Melhora importante, com risco operacional alto",
    healthCopy: "A configuração reduz as perdas da referência de 74 para 9, mas Zurich continua sensível a falhas e eventos.",
    summary: "Troque um AC por um segundo DC, priorize reservas e distribua potência com prioridade.",
    decisions: [
      ["Usar 2 DC 30 kW + 2 AC 7 kW", "Quatro vagas e 298 retiradas na segunda exigem carga rápida nos horários de pico.", "Perdas caem de 74 para 9: +11.282 pontos; o segundo DC substitui um AC."],
      ["Manter os 2 AC 7 kW", "A fila acumula durante as 42 horas de fechamento do fim de semana.", "Sem o segundo AC, seriam 13 perdas: +631 pontos."],
      ["Priorizar a próxima retirada", "A fila de segunda precisa carregar primeiro os carros da próxima reserva.", "Contra chegada: +1.790 pontos; contra menor SOC: +8.047."],
      ["Dividir potência por prioridade", "67,5 kW precisam ser repartidos entre dois DC e dois AC.", "Mantém 9 perdas e reduz upgrades de 37 para 21: +132 pontos."],
      ["Aceitar recarga na ponta", "A agência fica aberta até 20h e o pico chega entre 18h e 19h.", "2.164 kWh na ponta evitam 11 perdas: +1.339 pontos."],
      ["Manter a entrada B3 75", "A entrada já oferece 67,5 kW úteis; upgrades maiores não ficaram entre os melhores.", "Evita obra de entrada sem retorno demonstrado."]
    ],
    risk: "Zurich é a agência mais arriscada: nota esperada de −5.733 ± 6.183 nas semanas ocultas. Monitore picos de segunda e disponibilidade dos DC."
  }
};

const agencySelect = document.querySelector("#agency-select");
const profileIntro = document.querySelector("#profile-intro");
const profileList = document.querySelector("#profile-list");
const issueList = document.querySelector("#issue-list");
const constraintsIntro = document.querySelector("#constraints-intro");
const constraintList = document.querySelector("#constraint-list");
const solutionSection = document.querySelector("#solution-section");
let currentAgency = agencies[agencySelect.value];

function renderDiagnosis(agency) {
  profileIntro.textContent = agency.intro;
  profileList.innerHTML = agency.profile.map(([label, value]) =>
    `<div class="profile-row"><dt>${label}</dt><dd>${value}</dd></div>`
  ).join("");
  issueList.innerHTML = agency.issues.map(([title, detail]) =>
    `<li class="issue-item"><span class="issue-dot" aria-hidden="true"></span><span><strong>${title}</strong><small>${detail}</small></span></li>`
  ).join("");
  constraintsIntro.textContent = agency.constraintsIntro;
  constraintList.innerHTML = agency.constraints.map(([label, value, width]) =>
    `<div class="constraint"><div class="constraint-top"><strong>${label}</strong><span>${value}</span></div><div class="meter" aria-label="${label}: ${value}"><span style="width:${width}%"></span></div></div>`
  ).join("");
}

function renderSolution(agency) {
  document.querySelector("#solution-agency").textContent = agency.name;
  document.querySelector("#solution-summary").textContent = agency.summary;
  document.querySelector("#kpi-strip").innerHTML = agency.metrics.map(([label, value, note]) =>
    `<div class="kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`
  ).join("");
  document.querySelector("#health-metrics").innerHTML = agency.health.map(([value, label, note]) =>
    `<div class="health-metric"><div class="health-ring"><strong>${value}</strong></div><div class="health-caption"><strong>${label}</strong><small>${note}</small></div></div>`
  ).join("");
  document.querySelector("#health-note-title").textContent = agency.healthTitle;
  document.querySelector("#health-note-copy").textContent = agency.healthCopy;
  document.querySelector("#decision-list").innerHTML = agency.decisions.map(([decision, problem, impact]) =>
    `<article class="decision"><div><span class="decision-label">Decisão</span><h4>${decision}</h4></div><div><span class="decision-label">Problema que resolve</span><p>${problem}</p></div><div><span class="decision-label">Resultado na simulação</span><p class="decision-impact">${impact}</p></div></article>`
  ).join("");
  document.querySelector("#risk-note").textContent = agency.risk;
}

agencySelect.addEventListener("change", () => {
  currentAgency = agencies[agencySelect.value];
  renderDiagnosis(currentAgency);
  if (!solutionSection.hidden) renderSolution(currentAgency);
});

document.querySelector("#generate-button").addEventListener("click", () => {
  currentAgency = agencies[agencySelect.value];
  renderSolution(currentAgency);
  solutionSection.hidden = false;
  solutionSection.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#solution-title").setAttribute("tabindex", "-1");
  document.querySelector("#solution-title").focus({ preventScroll: true });
});

document.querySelector("#download-button").addEventListener("click", () => {
  const content = [
    `PLANO DE EFICIÊNCIA — AGÊNCIA ${currentAgency.name.toUpperCase()}`,
    "",
    currentAgency.summary,
    "",
    "INDICADORES",
    ...currentAgency.metrics.map(([label, value, note]) => `- ${label}: ${value} — ${note}`),
    "",
    "DECISÕES E RESOLUÇÕES",
    ...currentAgency.decisions.flatMap(([decision, problem, impact]) => [
      `\n${decision}`,
      `Problema: ${problem}`,
      `Resolução/resultado: ${impact}`
    ]),
    "",
    `RISCO: ${currentAgency.risk}`,
    "",
    "Fonte: Info.md — simulações locais e pesos identificados em 21/10/2026."
  ].join("\n");
  const file = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `plano-${currentAgency.name.toLowerCase()}.txt`;
  link.click();
  URL.revokeObjectURL(url);
});

renderDiagnosis(currentAgency);
